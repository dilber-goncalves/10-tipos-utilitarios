// Record -> cria um objeto com o tipo informado, pode utilizar para quando todas as propriedades tem o mesmo tipo

type Pessoa = Record<'nome' | 'email' | 'senha', string> 

type Usuario = {
    nome: string
    email: string
    senha: string
}

type Dupla = Record<'jogador1' | 'jogador2', Usuario>

const time1: Dupla = {
    jogador1: {
        nome: 'Jogador1',
        email: 'email1@email.com',
        senha: 'senha1'
    },
    jogador2: {
        nome: 'Jogador2',
        email: 'email2@email.com',
        senha: 'senha2'
    }
}