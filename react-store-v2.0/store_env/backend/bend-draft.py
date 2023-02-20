from flask import Flask, render_template, request, url_for, flash, redirect
import os
from pymongo import MongoClient
import datetime
import flask_login
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

login_manager = LoginManager()

agr=datetime.datetime.now()

app = Flask(__name__)

#app.config()
key=os.urandom(24).hex()
app.config["SECRET_KEY"] = key
#client = MongoClient('localhost', 5000)
#client = MongoClient('localhost', 27017, username='meubdmtbom', password='cvmp1234')
#db = client.test
#client = MongoClient(
#   "mongodb+srv://meubdmtbom:cvmp1234@cluster0.22ps3df.mongodb.net/todos")#, 
# #  server_api=ServerApi('1'))
client = MongoClient("mongodb://meubdmtbom:cvmp1234@cluster0.22ps3df.mongodb.net/?retryWrites=true&w=majority")
db = client.flask_db
collections = db.todos



app.config['SECRET_KEY'] = key


#### Login Manager ####
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

login_manager.init_app(app)

class LoginForm(FlaskForm):
     username = StringField('username', validators=[DataRequired()])
     password = StringField('password', validators=[DataRequired()])
     remember = BooleanField('remember me')

@login_manager.user_loader
def user_loader(user_id):
    return User.get(user_id)


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.get(form.username.data)
        if user and user.password == form.password.data:
            flask_login.login_user(user)
            flash('Logged in successfully.')
            next = request.args.get('next')
            return redirect(next or url_for('index'))
        else:
            flash('Incorrect username or password.')
    return  render_template('login.html', form=form)

## falta remember me
#teste:
'''
from flask_login import FlaskLoginClient

app.test_client_class = FlaskLoginClient

Next, use the app.test_client() method to make a test client, as you normally do. However, now you can pass a user object to this method, and your client will be automatically logged in with this user!

def test_request_with_logged_in_user():
    user = User.query.get(1)
    with app.test_client(user=user) as client:
        # This request has user 1 already logged in!
        client.get("/")



'''
@app.route('/')
def index():
    return render_template('index.html')

        






users = db.users
@app.route('/create_client/', methods=('GET', 'POST'))
def create_client():
            
            if request.method == 'POST':
                            
                nome = request.form['nome']
                foto = request.form['foto']
                cpf = request.form['cpf']
                email = request.form['email']
                senha = request.form['senha']
                telefone = request.form['telefone']
                data_nasc = request.form['data_nasc']
                perfil = request.form['perfil']
                time_stamp = datetime.datetime.now()
    
                if not nome:
                    flash('Nome is required!')
                elif not foto:
                    flash('Foto is required!')
                elif not cpf:
                    flash('CPF is required!')
                elif not email:
                    flash('Email is required!')
                elif not senha:
                    flash('Senha is required!')
                elif not telefone:
                    flash('Telefone is required!')
                elif not data_nasc:
                    flash('Data de Nascimento is required!')
                elif not perfil:
                    flash('Perfil is required!')
                    for x in users.find({},{'email=1'}):
                        if email == x:
                            flash('Email already exists!')
                            e_auth=0
                        else:
                            e_auth=1
                    if e_auth==1:
                        users.insert_one({'nome': nome, 'foto': foto, 'cpf': cpf, 'email': email,
                                                 'senha': senha, 'telefone': telefone, 'data_nasc': data_nasc,
                                                   'perfil': perfil, 'time_stamp': time_stamp})
                        flash('Client created successfully!')

    
                    return redirect(url_for('index'))
            
            return render_template('create_client.html')

'''
 Request product form data and insert into product mongo db collection
Product data:
    nome
    preco
    description
    categoria
    imagem
'''
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


'''
 Request order form data and insert into product mongo db collection
order data:
    data
    hora
    cliente
    produtos
    id_pedido
'''
orders=db.orders
order_sum:db.order_sum
@app.route('/create_order/', methods=('GET', 'POST'))
def create_order():           
            if request.method == 'POST':
                agr=datetime.datetime.now()
                cliente = request.form['cliente']
                produtos = request.form['produtos'] #json
                id_pedido = request.form['id_pedido']
                total = request.form['total']
                for produto in produtos:

                    orders.insert_one({'cliente': cliente, 'produto': produto.nome, 'preco' : produto.preco ,'id_pedido': id_pedido})
                    order_sum.insert_one({'cliente': cliente, 'total': total, 'id_pedido': id_pedido, 'data': agr})
                    return redirect(url_for('index'))
            
            return render_template('create_order.html')


'''
auth client login and password

'''
@app.route('/auth_client_login/', methods=('GET', 'POST'))
def auth_client_login():
        if request.method == 'POST':
            email = request.form['email']
            senha = request.form['senha']
        if not email:
            flash('Email is required!')
        elif not senha:
            flash('Senha is required!')
        else:
            for x in users.find({},{'email=1'}):
                if email == x:
                    e_auth=1
                    for x in users.find({},{'senha=1'}):
                        if senha == x:
                            s_auth=1
                        else:
                            s_auth=0
                else:
                    e_auth=0
            if e_auth==1 and s_auth==1:
                return redirect(url_for('index'))
            else:
                flash('Email or password is wrong!')
                return redirect(url_for('auth_client'))
        return render_template('auth_client.html')
