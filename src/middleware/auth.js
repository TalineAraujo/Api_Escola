const {verify} = require("jsonwebtoken")

async function auth (req, res, next ){
try{
console.log ("entramos na middleware")

const { authorization } = req.headers 

req['payload'] = verify(authorization, process.env.SECRET_JWT)

next()


}catch(error){

    return res.satus(401).json({

        message:"Autenticação falhou!",
        cause: error.message
    })
}

}

module.exports = {auth}