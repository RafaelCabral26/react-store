const mongoose = require("mongoose")

async function connect() {

    try {
        mongoose.set("strictQuery", true)

        mongoose.connect(process.env.DB_URI);
        console.log("MongoDB conectado");
    }catch(error) {
        console.log(error)
    }
}

module.exports = connect