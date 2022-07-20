function horaDia() {
    let mudarHora = document.getElementById("horas")
    let mudarImagem = document.getElementById("imagem")
    let data = new Date()
    let hora = data.getHours()
    mudarHora.innerHTML = `Agora são ${hora} horas`
    
    if(hora > 0 && hora < 12) {
        document.body.style.background = "yellow"
        mudarImagem.src = "amanhecer01.jpg"
    } else if (hora >= 12 && hora <= 15) {
        document.body.style.background = "red"
        mudarImagem.src = "meiodia.jpg"
    } else if (hora >= 16 && hora <= 18) {
        document.body.style.background = "green"
        mudarImagem.src = "entardecer.jpeg"
    } else {
        document.body.style.background = "black"
        mudarImagem.src = "noite.jpg"
    }
}