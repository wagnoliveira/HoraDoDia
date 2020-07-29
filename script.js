function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h${min}` 
    if (hora >= 4 && hora < 12) {
        // BOM DIA
        img.src = 'morninground'
        document.body.style.background = '#827362'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'afternoonround'
        document.body.style.background = '#607976'
    } else {
        // BOA NOITE
        img.src = 'nightround'
        document.body.style.background = '#65362a'
    }
}

