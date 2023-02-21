from werkzeug.security import generate_password_hash
hash = generate_password_hash('foobar')

from werkzeug.security import check_password_hash
check_password_hash(hash, 'foobar')

class User(db.Model):
    # ...

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
