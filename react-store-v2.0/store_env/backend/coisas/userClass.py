import json
from connectionClass import connectDB
import flask_login

class User(flask_login.UserMixin):
    def __init__(self,id, username, password, nome, foto, cpf, email, 
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
        self.db = connectDB.vendinha
        self.users = self.db.users
  
  
    def get(id, self):
        'mongodb first match with id'
        user = self.users.find_one({'_id': id}) #.Oid
        if user:
            return User(id=str(user['id']), username=user['name'], 
                        password=user['password'],nome=user['name'], 
                        foto=user['foto'],cpf=user['cpf'],email=user['email'], 
                        telefone=user['telefone'],data_nasc=user['data_nasc'], 
                        perfil=user['perfil'])
        else:
            return None
    def get_ByMail(email, self):
        'mongodb first match with email'
        user = self.users.find_one({'email': email})
        if user:
            return User(id=str(user['_id']), username=user['name'], 
                        password=user['password'],nome=user['name'], 
                        foto=user['foto'],cpf=user['cpf'],email=user['email'], 
                        telefone=user['telefone'],data_nasc=user['data_nasc'], 
                        perfil=user['perfil'])
        else:
            return None
    def toJson(self):
         return json.dumps(self, default=lambda o: o.__dict__)