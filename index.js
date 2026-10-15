import express from "express";
import router from "./src/router/filmes.js";

const app = express();
app.use(express.json());




app.listen(3000,() =>{
    console.log("servidor funcionado na porta 3000.")
})