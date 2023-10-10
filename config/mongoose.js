//require library
const mongoose = require('mongoose');

//connect to database
async function main() {
    const db = await mongoose.connect(`mongodb+srv://assignment:edviron@cluster0.ebxruu8.mongodb.net/`);
    module.exports = db;
}

main()
.then(() => console.log('MongoDB Connected...')) //if connected
.catch(err => console.log(err)); //if error
