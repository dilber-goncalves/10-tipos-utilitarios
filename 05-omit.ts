//Omit -> faz o inverso do Pick - remove as chaves informadas

type Carro = {
    marca: string
    modelo: string
    ano: number
    portas: number
}

type NovoCarroOmit = Omit<Carro, 'portas'>

type Usuario = {
    nome: string
    email: string
    senha: string
}

type UsuarioSemSenha = Omit<Usuario, 'senha'>