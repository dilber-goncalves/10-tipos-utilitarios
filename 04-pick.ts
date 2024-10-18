// Pick<tipo> -> Pega apenas as chaves informadas

type Carro = {
    marca: string
    modelo: string
    ano: number
    portas: number
}

type NovoCarro = Pick<Carro, 'marca' | 'modelo' | 'ano'>

type Usuario = {
    nome: string
    email: string
    senha: string
}

type UsuarioSemSenha = Pick<Usuario, 'nome' | 'email'>