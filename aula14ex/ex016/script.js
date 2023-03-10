function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.lenght == 0 || passo.value.lenght == 0) {
       // window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
        for(let c = i; c <= f; c+= p){
            res.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            // Contagem regressiva
         for(let c = i; c>= f; c -= p){
            res.innerHTML += ` ${c} \u{1f449}`
            }   
        }
        res.innerHTML += `\u{1f3c1}`
    }
}

