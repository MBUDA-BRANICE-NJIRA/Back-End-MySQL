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

//Error handling MiddleWare

app.use((err, req, next) => {
    if(err.status ===404){
        //Handling 401 unauthorized error
        res.status(401).send({
            error: {
                status: 401,
                message: 'NUnauthorized:Invalide user password',
            }
        });
    }
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);

})


