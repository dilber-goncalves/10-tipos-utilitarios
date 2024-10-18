//readonly<tipo> -> somente leitura

type Pessoa = {
    nome: string
    email: string
    idade: number
}

const usuarios: Readonly<Pessoa>[] = [] 

usuarios[usuarios.length] = {
    nome: 'Dilber',
    idade: 28,
    email: 'dilber@email.com'
}   

// usuarios[0].nome = 'Jose'

const usuario: Readonly<Pessoa> = {
    nome: 'Dilber',
    email: 'email@email.com',
    idade: 28
}

// usuario.nome = 'Jose'

console.log(usuario);
