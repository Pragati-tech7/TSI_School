const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/studentRegistration", {
    
}).then(() => {
    console.log(`Connection Successful`);
}).catch((e) => {
    console.log(`Connection Failed`);
})