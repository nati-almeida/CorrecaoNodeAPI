import ServiceFilmes from '../service/filmes.js'

class controllerFilmes{

    Buscar(req, res) {
        try{
            const filmes = ServiceFilmes.Buscar()

            res.send({filmes})
        }catch(error){
            res.send({message: error.message})
        }
    }

    BuscarUm(req, res) {
        try{
            const id = req.params
            const filme = ServiceFilmes.BuscarUm(id)

            res.send({filme})
        }catch(error){
            res.send({message: error.message})
        }
    }

    //titulo, classificação, lançamento)
    Criar(req, res) {
                try{
                const {titulo, classificacao, descricao, lancamento} = req.body

                ServiceFilmes.Criar(titulo, classificacao, descricao, lancamento)

                res.send({menssage: "filme criado com sucesso!"})

        }catch(error){
            res.send({message: error.message})
        }
    }
    

    Alterar(req, res) {
                try{
                    const id = req.params.id
                    const {titulo, classificacao, descricao, lancamento} = req.body

                ServiceFilmes.Alterar(id,titulo, classificacao, descricao, lancamento)

                res.send({menssage: "filme alterado com sucesso!"})


        }catch(error){
            res.send({message: error.message})
        }
    }


        AlterarStatus(req, res) {
                try{
                    const id = req.params.id


                ServiceFilmes.AlterarStatus(id)

                res.send({menssage: "filme alterado com sucesso!"})


        }catch(error){
            res.send({message: error.message})
        }
    }
    

    Deletar(req, res) {
                try{
                    const id = req.params
            const filme = ServiceFilmes.Deletar(id)

            res.send({filme})
        }catch(error){
            res.send({message: error.message})
        }

        }catch(error){
            res.send({message: error.message})
        }
    }
    




export default new controllerFilmes()