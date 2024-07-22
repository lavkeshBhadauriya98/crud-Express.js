const mongoose = require("mongoose");

const connectionToDb = async()=>{
    mongoose.connect(process.env.mongo_url)
    .then((conn)=>{
        console.log(`connected to DB: ${conn.connection.host}`);
    }).catch((err)=>{
        console.log(err.message);
        process.exit(1);
    })
}

module.exports = connectionToDb