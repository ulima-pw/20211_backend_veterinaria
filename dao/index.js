import { Sequelize, DataTypes } from "sequelize"

// Conexion a la base de datos postgres
// Cadena de conexion:
// Postgres: postgres://<USER>:<PWD>@<HOST(IP o DOMINIO)>:5432/<DB_NAME>

const CADENA_CONEXION = "postgres://veterinaria:veterinaria@localhost:5432/veterinariadb"
const sequelize = new Sequelize(CADENA_CONEXION)

// Definir nuestra entidades
const Mascota = sequelize.define("Mascota", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    nombre : DataTypes.STRING(100),
    edad : DataTypes.INTEGER,
    birthday : {
        type : DataTypes.DATE,
        allowNull : false
    }
},{
    freezeTableName : true,
    timestamps : false
})

export { Mascota }