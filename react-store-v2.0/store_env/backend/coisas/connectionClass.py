from pymongo import MongoClient



class  connectDB():
    def __init__(self,mongoURL = "mongodb+srv://todos:osO5eYspfv26Ffl6@cluster0.3iwfkdp.mongodb.net/?retryWrites=true&w=majority"):
        self.client = MongoClient(mongoURL)
