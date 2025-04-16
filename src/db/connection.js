const mongoose = require("mongoose");


const connection = () =>{
    mongoose.connect("mongodb://localhost:27017/CRUD_Operations",{
        useUnifiedTopology:true,
        useNewUrlParser:true,
    })
    
    .then(()=>{
        console.log("DB-Connection Established");
    })
    
    .catch((error)=>{
        console.log(error);
    });
    
}
module.exports= connection;