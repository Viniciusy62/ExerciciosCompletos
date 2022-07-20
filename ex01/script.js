function horaDia() {
    let mudarHora = document.getElementById("horas")
    let mudarImagem = document.getElementById("imagem")
    let data = new Date()
    let hora = data.getHours()
    mudarHora.innerHTML = `Agora são ${hora} horas`
    
    if(hora > 0 && hora < 12) {
        document.body.style.background = "#e8f076"
        mudarImagem.src = "amanhecer01.jpg"
    } else if (hora >= 12 && hora <= 15) {
        document.body.style.background = "#f0bf76"
        mudarImagem.src = "meiodia.jpg"
    } else if (hora >= 16 && hora <= 18) {
        document.body.style.background = "#f08e76"
        mudarImagem.src = "entardecer.jpeg"
    } else {
        document.body.style.background = "#1a0f0d"
        mudarImagem.src = "noite.jpg"
    }
}