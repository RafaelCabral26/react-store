from flask import Flask, render_template, request, url_for, flash, redirect
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




#bd connection

key = os.urandom(24).hex()
app = Flask(__name__)
app.config['SECRET_KEY'] = key
client = MongoClient(
    "mongodb+srv://todos:osO5eYspfv26Ffl6@cluster0.3iwfkdp.mongodb.net/?retryWrites=true&w=majority")
db = client.vendinha
users = db.users
app.run(debug=True)
CORS(app)










#### Login Manager ####
@app.route('/login', methods=['GET', 'POST'])
def login():
    app = Flask(__name__)
    @flask_login.LoginManager.user_loader
    def user_loader(user_id):
        return User.get(user_id)
    
    login = flask_login.LoginManager.init_app(app)
    class LoginForm(FlaskForm):
        username = StringField('email', validators=[DataRequired()])
        password = StringField('password', validators=[DataRequired()])
        remember = BooleanField('remember me')
        submit =   SubmitField('Sign In')
    
    form = LoginForm()
    
    class User(flask_login.UserMixin):
        def __init__(self, id, username, password, nome, foto, cpf, email, 
                    telefone, data_nasc,perfil):
                super().__init__()
                self.id = id  
                self.username = username
                self.password = password
                self.nome = nome
                self.foto = foto
                self.cpf = cpf 
                self.email = email 
                self.telefone = telefone
                self.data_nasc = data_nasc
                self.perfil = perfil
        def get(id):
            'mongodb first match with id'
            user = users.find_one({'_id': ObjectId(id)})
            if user:
                return User(id=str(user['_id']), username=user['username'], 
                            password=user['password'],nome=user['nome'], 
                            foto=user['foto'],cpf=user['cpf'],email=user['email'], 
                            telefone=user['telefone'],data_nasc=user['data_nasc'], 
                            perfil=user['perfil'])
            return None
        def get_ByMail(email):
            'mongodb first match with email'
            user = user.find_one({'email': email})
            if user:
                return User(id=str(user['_id']), username=user['username'], 
                            password=user['password'],nome=user['nome'], 
                            foto=user['foto'],cpf=user['cpf'],email=user['email'], 
                            telefone=user['telefone'],data_nasc=user['data_nasc'], 
                            perfil=user['perfil'])
    app = Flask(__name__)
    form = LoginForm()
    if form.validate_on_submit():
        user = User.get_ByMail(form.username.data)
        if user and user.password == form.password.data:
            flask_login.login_user(user)
            flash('Logged in successfully.')
            next = request.args.get('next')
            return redirect(next or url_for('index'))
        else:
            flash('Incorrect username or password.')
        return  render_template('login.html', form=form)









    #@flask_login.LoginManager.request_loader




@app.route('/logout')
def logout():
    flask_login.logout_user()
    return redirect(url_for('index'))
#### end Login Manager #### 

@app.route('/teste/')
def success():
   return 'welcome meu mininu'



@app.route('/register', methods=('GET', 'POST'))
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
    prod = list(products.find().limit(10))
    json_data = dumps(prod)
    print(json_data)
    return json_data