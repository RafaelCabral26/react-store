from flask import Flask, render_template, request, url_for, flash, redirect
from pymongo import MongoClient
import os
key = os.urandom(24).hex()
import datetime
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['SECRET_KEY'] = key
client = MongoClient(
    "mongodb+srv://todos:osO5eYspfv26Ffl6@cluster0.3iwfkdp.mongodb.net/?retryWrites=true&w=majority")
db = client.vendinha
users = db.users
app.run(debug=True)
CORS(app)

@app.route('/teste/')
def success():
   return 'welcome meu mininu'



@app.route('/create_client/', methods=('GET', 'POST'))
def create_client():
            request_data = request.get_json()

            if request.method == 'POST':
                nome = request_data["nome"]
                cpf = request_data['cpf']
                email = request_data['email']
                password = request_data['password']
                telefone = request_data['telefone']
                data_nasc = request_data['data_nasc']
                perfil =  0
                time_stamp = datetime.datetime.now()
                
                if not nome:
                    flash('Nome is required!')
                elif not cpf:
                    flash('CPF is required!')
                elif not email:
                    flash('Email is required!')
                elif not password:
                    flash('Senha is required!')
                elif not telefone:
                    flash('Telefone is required!')
                elif not data_nasc:
                    flash('Data de Nascimento is required!')
                elif not perfil:
                    flash('Perfil is required!')
                    check = users.count_documents({"email":email})
                if check > 0:    
                        return "Email já existe!"

                users.insert_one({'nome': nome, 'cpf': cpf, 'email': email,
                                             'password': password, 'telefone': telefone, 'data_nasc': data_nasc,
                                               'perfil': perfil, 'time_stamp': time_stamp})
                return "Cadastrado!"


products=db.products
@app.route('/create_product/', methods=('GET', 'POST')) 
def create_product():
            
            if request.method == 'POST':
                name = request.form['name']
                price = request.form['[price]']
                description = request.form['description']
                group = request.form['group']
                photo = request.form['photo']
    
                if not name:
                    flash('name is required!')
                elif not price:
                    flash('price is required!')
                elif not description:
                    flash('description is required!')
                elif not group:
                    flash('Categoria is required!')
                elif not photo:
                    flash('photo is required!')
                else:
                      products.insert_one({'name': name, 'price': price,
                     'description': description, 'group': group,
                      'photo': photo})
                      flash('Product created successfully!')
            return 'produto adicionado'
            

            