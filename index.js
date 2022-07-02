import express from "express"
import { Mascota } from "./dao/index.js"

const PORT = 5000
const app = express()

// Endpoint: Obtener lista de mascotas
// GET /mascotas?edad=5 
app.get("/mascotas", async (req, resp) => {
    const edadMascota = req.query.edad
    let mascotas;
    if (edadMascota == undefined){
        mascotas = await Mascota.findAll()
    }else {
        mascotas = await Mascota.findAll({
            where : {
                edad : edadMascota
            }
        })
    }
    resp.send(JSON.stringify(mascotas))
})

// Endpoint: Agregar una nueva mascota
// POST /mascotas
app.post("/mascotas", (req, resp) => {
    resp.send("OK")
})

app.listen(PORT, () => {
    console.log(`Servidor inicial en puerto ${PORT}`)
})