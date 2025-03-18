//This where we create our server
const express = require('express')
const cors = require('cors')
require ('dotenv').config();

const app = express()

var corOptions = {
    origin: 'http://localhost:3000',
} 

app.use(cors(corOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);

})