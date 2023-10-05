const mongoose = require("mongoose");

// please add your mongodb username and password
mongoose.connect("mongodb+srv://username:password@cluster0.jczvf6q.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("mongodb connected");
})
.catch(()=> {
    console.log("failed")
})

const newSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type :String,
        required:true
    },
    password : {
        type :String,
        required:true
    }

})
const collection = mongoose.model("collection",newSchema)
module.exports= collection;
