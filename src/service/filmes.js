import Filmes from '../model/filmes.js'

class serviceFilmes{
    Buscar() {
        return filmes.Buscar
    }

    BuscarUm(id) {
        if(!id || isNaN(id)){
            throw new Error ("informe ID válido")
        }

        return Filmes.BuscarUm(id)
    }

    Criar(titulo, classificacao, descricao, lancamento) {
        if(!titulo || !classificacao || !descricao || lancamento == undefined ) {
            throw new Error ("favor informar os dados corretamente")
        }

        Filmes.Criar()

    }

    Alterar(titulo, classificacao, descricao, lancamento) {
        if(!id || isNaN(id) || !titulo || !classificacao || !descricao || lancamento == undefined ) {
            throw new Error ("favor informar os dados corretamente")
        }
        Filmes.Alterar(id,)
    }

        AlterarStatus(id) {
        if(!id || isNaN(id) ) {
            throw new Error ("favor informar os dados corretamente")
        }
        Filmes.Alterar(id,)
    }

    Deletar(id) {
         if(!id || isNaN(id)){
            throw new Error ("informe ID válido")
        }

        return Filmes.Deletar(id)

    }


}

export default new serviceFilmes()