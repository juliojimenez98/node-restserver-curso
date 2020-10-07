const jwt = require('jsonwebtoken')


//===============
//Verificar TOken
//===============


let verificarToken= (req,res,next)=>{

    let token = req.get('token');

    jwt.verify( token, process.env.SEED, (err, decoded)=>{
       
        if (err) {
            return res.status(401).json({
                ok: false,
                err:{
                    message:'Token no válido'
                }
            });

        }


        req.usuario = decoded.usuario;
        next();
    });



};


//===============
//Verificar ADMIN_ROLE
//===============


let verificaAdmin_Role= (req, res, next)=>{
    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
        return;

    }else{
        return res.json({
            ok: false,
            err:{
                message:'Usuario sin autorización'
            }
        });
    }
}



module.exports = {
    verificarToken,
    verificaAdmin_Role
}