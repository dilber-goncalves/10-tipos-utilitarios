//exclude -> remove as chaves informadas

//type T1 = Exclude<'a' | 'b' | 'c', 'b'>;

type Transacao = 'credito' | 'debito' | 'boleto' | 'pix';

type Banco1 = Exclude<Transacao, 'debito' | 'boleto' | 'pix'>;

type Banco2 = Exclude<Transacao, 'credito' | 'debito'>;
