const express = require('express');
const appRoute = require('./routes/routes');
const app = express();
const cors = require("cors");
const mongoose  = require('mongoose');
app.use(cors());
require("dotenv").config(); 


const DB = `mongodb+srv://mb561366:123BILaL789@cluster0.kusl9mj.mongodb.net/Testimonials?retryWrites=true&w=majority`;

mongoose.connect(DB).then(() => {
    console.log(`Connection Successful of MOngo Db`);
}).catch((err) => console.log('No mongo db connection'));

const PORT = process.env.PORT || 5000;


app.use(express.json());

/**routes */
app.use('/api',appRoute);

app.listen(PORT, () => {

    console.log(`Server is running at http://localhost:${PORT}`)

})

