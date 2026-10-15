// rotas - endpoint

import express from 'express'
import ControllerFilmes from '../controller/filmes.js'

const router = express.Router()

//buscar todos
router.get("/buscar", ControllerFilmes.Buscar)

//buscaUm
router.get("/buscarUm/:id", ControllerFilmes.BuscarUm)

//criar
router.post("/criar", ControllerFilmes.Criar)

//alterar
router.put("/alterar/:id", ControllerFilmes.Alterar)


router.put("/alterarstatus/:id", ControllerFilmes.Alterarstatus)

//deletar
router.delete("/deletar/:id", ControllerFilmes.Deletar)


export default router