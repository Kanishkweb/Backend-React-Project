const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Kanishkweb:Kanishk%401968@cluster0.6jajxqh.mongodb.net/"
// Connceting mongoose database
async function main() {
    await mongoose.connect(mongoURI, () =>{
      console.log('Hey its working bro /sis..')
    });
    
    
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


module.exports = main;

// Define mongoose Shechmea
// const contactSchema = new mongoose.Schema({
//     name: String,
//     phone:String,
//     email:String,
//     concern:String
//   });

// Schema to model
// const contact = mongoose.model('contact', contactSchema);