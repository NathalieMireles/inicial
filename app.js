const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/'

// Connect to MongoDB
mongoose.connect(url)
.then(() => {
        console.log('Connected to MongoDB')
})
.catch((err) => {
        console.log('Error connecting to MongoDB:', err)
})

const EsquemaAlumnos = new mongoose.Schema({
    name: {
        type: String,
    },
    lastName: {
        type: String,
    },
    age: {
        type: Number,
    }
}, {Collection: 'alumnos'} )

const modeloAlumnos = mongoose.model("Tabla de Alumnos", EsquemaAlumnos)

// Insertar un nuevo alumno
modeloAlumnos.create({
    name: "Montse",
    lastName: "Lozano",
    age: 20
})