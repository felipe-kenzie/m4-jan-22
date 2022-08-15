let nome = 'Felipe'

let nascimento = new Date()

let idade = 23.5

let isAdm: boolean = true
isAdm = false

let vetor = [1,2,3,4]

let vetorMisto = ['Fabio', 23, new Date()]

let modulo: string = 'M4'

let dados: Array<number> = [1,2]

let dadosMistos: (number | string)[] = [1, '2']

//EVITEM UTILIZAR O any type POIS É UMA MÁ PRÁTICA
let id: any = '123'
id = 123

let idCorreto: string | number = 456

let user: IUser = {
    nome: 'Fabio',
    email: 'fabio@kenzie.com.br',
    dadosBancarios: {
        numeroConta: '1234',
        saldo: 250.50,
        abertura: new Date()
    }
}

console.log(user.dadosBancarios.abertura)

type User = {
    nome: string
    email: string
    dadosBancarios: {
        numeroConta: string
        saldo: number
        abertura: Date
    }
}

interface IUser {
    nome: string
    email: string
    dadosBancarios: IDadosBancarios
}

interface IDadosBancarios {
    numeroConta: string
    saldo: number
    abertura?: Date
}

interface IProdutoRequest {
    nome: string
    preco: number
}

interface IProdutoResponse extends IProdutoRequest {
    id: number
}

const prodReq: IProdutoRequest = {
    nome: 'Computador',
    preco: 2500
}

const prodResp: IProdutoResponse = {
    id: 1,
    nome: 'Computador',
    preco: 2500
}

const getName = (): string => {
    return 'Maykel'
}

const getProduto = (nome: string): string => {
    return nome
}

const getFullProduto = ({nome, preco}: IProdutoRequest): IProdutoResponse => {
    const ProdutoResponse: IProdutoResponse = {
        nome,
        preco,
        id: 1
    }
    return ProdutoResponse
}

console.log(getFullProduto({nome: 'Computador', preco: 2500}))