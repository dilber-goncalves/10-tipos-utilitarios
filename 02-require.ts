//required -> transforma tudo em obrigatórios
//faz o contrario do partial (partial -> transforma tudo em parciais)

type Pessoa = {
    nome: string
    email: string
    idade: number
}

const usuarios: Pessoa[] = []

type PessoaObrigatorio = Required<Pessoa>

function cadastrarPessoa(pessoa: Required<Pessoa>) {
    
}

function atualizarPessoa(pessoa: Partial<Pessoa>){
    
}

atualizarPessoa({
    nome: 'Dilber',
    email: 'dilber@email.com'
})

cadastrarPessoa({
    nome: 'Dilber',
    idade: 28,
    email: 'dilber@email.com'
})


usuarios[usuarios.length] = {
    nome: 'Dilber',
    idade: 28,
    email: 'dilber@email.com'
}

