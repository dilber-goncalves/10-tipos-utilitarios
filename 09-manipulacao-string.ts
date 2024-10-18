//Uppercase<TipoString>
//Lowercase<TipoString>
//Capitalize<TipoString>

type TransacaoCredito = 'Credito'
type TransacaoDebito = 'Debito'

type transacao = Uppercase<TransacaoCredito> | Uppercase<TransacaoDebito> 
type transacao2 = Lowercase<TransacaoCredito> | Lowercase<TransacaoDebito>
type transacao3 = Capitalize<TransacaoCredito> | Capitalize<TransacaoDebito>

const tipo: transacao = 'CREDITO'
const tipo2: transacao2 = 'debito'
const tipo3: transacao3 = 'Credito'