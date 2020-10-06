



//=============================
// Puerto
//=============================

process.env.PORT = process.env.PORT || 3000;



//=============================
// Entorno
//=============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//=============================
// Base de datos
//=============================

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
}else{
    urlDB = 'mongodb+srv://julioski:wouxTSmQ95uBMwv9@cluster0.uwyh8.mongodb.net/cafe'
}
process.env.URLDB = urlDB;

