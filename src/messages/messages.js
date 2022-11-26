function message(type, nome, OS) {
    if(type='register') {
        return `${nome}, é com enorme satisfação que desejamos as boas vindas ao time da Doctor Fênix.`
    }
    return `${nome} seu aparelho foi registrado com sucesso em nosso sistema e passará por análise /n. 
            Em até 72h retornaremos contato sobre avaliação do equipamento /n.
            Segue abaixo o número da Ordem de Servico, (OS) /n
            <b> OS </b>: ${OS}.`
}