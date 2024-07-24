import express, { Express } from "express";
import "dotenv/config"
import { PORT } from "./config/constants";
import router from "./routes";

const app = express()

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log(`Servidor inicializado na porta: ${PORT}`)
})