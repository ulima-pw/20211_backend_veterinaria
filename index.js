import express from "express"

const PORT = 5000
const app = express()

// Endpoint: Obtener lista de mascotas
// GET /mascotas 
app.get("/mascotas", (req, resp) => {

})

app.listen(PORT, () => {
    console.log(`Servidor inicial en puerto ${PORT}`)
})