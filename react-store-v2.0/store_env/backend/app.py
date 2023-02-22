from flask import Flask, render_template, request, url_for, redirect
from pymongo import MongoClient
import os
import datetime
from flask_cors import CORS, cross_origin
from bson.json_util import dumps
import datetime
import flask_login
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired
import json
from coisas import connectionClass


#bd connection

key = os.urandom(24).hex()
app = Flask(__name__)
app.config['SECRET_KEY'] = key

mongoConnection = connectionClass()
db=mongoConnection.client()
users = db.users
CORS(app)





@app.route('/login', methods=['GET', 'POST'])
def login():
    user_data = request.get_json()
    def letLogin(userJson,userClass):
        mail = userJson['email']
        password = userJson['password']
        
        user = userClass.get_ByMail(mail)
        
        if user and user.password == password:
            print('Logged in successfully.')
            return user.toJson()
        else:
            print('Incorrect username or password.')
            return 'False'
    
    return letLogin(user_data, User)



@app.route('/logout')
def logout():
    flask_login.logout_user()
    return redirect(url_for('index'))
#### end Login Manager #### 

@app.route('/teste/')
def success():
   return 'welcome meu mininu'



@app.route('/create_client', methods=('GET', 'POST'))
def create_client():
            request_data = request.get_json()
            print(request_data)
            if request.method == 'POST':
                name = request_data["nome"]
                cpf = request_data['cpf']
                email = request_data['email']
                password = request_data['password']
                telefone = request_data['telefone']
                data_nasc = request_data['data_nasc']
                for x  in request_data.keys():
                    if x == 'foto':
                        foto = request_data['foto']
                else:
                    foto = 'missing photo'
                perfil =  0
                time_stamp = datetime.datetime.now()
                #pass_check = request_data['confirm-password']
                if not name:
                    print('Nome is required!')
                elif not cpf:
                    print('CPF is required!')
                elif not email:
                    print('Email is required!')
                elif not password:
                    print('Senha is required!')
                elif not telefone:
                    print('Telefone is required!')
                elif not data_nasc:
                    print('Data de Nascimento is required!')
                elif not perfil:
                    print('Perfil is required!')
                check = users.count_documents({"email":email})
            if check > 0:    
                    return "Email já existe!"
            else:
                     global User
                     new_user =( res := User(                   
                     id = id ,
                     username = email,
                     password = password,
                     nome = name,
                     foto = foto,
                     cpf = cpf ,
                     email = email ,
                     telefone = telefone,
                     data_nasc = data_nasc,
                     perfil = 'placeholder'))
                     users.insert_one(res.toJson())
                     print('Usuário cadastrado com sucesso!')
            return res.toJson()

products=db.products
@app.route('/create_product/', methods=('GET', 'POST')) 
def create_product():
            request_data = request.get_json()
            if request.method == 'POST':
                name = request_data['name']
                price = request_data['price']
                description = request_data['description']
                group = request_data['group']
                photo = request_data['photo']
    
                if not name:
                    return ('name is required!')
                elif not price:
                    return ('price is required!')
                elif not description:
                    return ('description is required!')
                elif not group:
                    return ('Categoria is required!')
                elif not photo:
                    return ('photo is required!')
                else:
                      products.insert_one({'name': name, 'price': price,
                     'description': description, 'group': group,
                      'photo': photo})
            return 'produto adicionado'
            
@app.route('/products_list', methods=('GET', 'POST'))
def products_list():
    prod = list(products.find())
    json_data = dumps(prod)
    print(json_data)
    return json_data