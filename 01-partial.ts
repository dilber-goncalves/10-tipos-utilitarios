//partial -> transforma tudo em parciais

type Pessoa = {
    nome: string
    email: string
    idade: number
}

type PessoaOpicional = Partial<Pessoa> 

const usuarios: Pessoa[] = []

usuarios[usuarios.length] = {
    nome: 'Dilber',
    idade: 28,
    email: 'dilber@email.com'
}

