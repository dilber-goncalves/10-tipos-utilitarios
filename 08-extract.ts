// extract<tipo> -> extrai todas as informações do objeto

type Transacao = 'credito' | 'debito' | 'boleto' | 'pix';


type Banco1Extract = Exclude<Transacao, 'debito'>;
type Banco2Extract = Exclude<Transacao, 'boleto' | 'pix'>;