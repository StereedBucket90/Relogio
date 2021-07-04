function carregar() {
    let divs = window.document.getElementById('hour')
    let msm = window.document.getElementById('msm')
    let horario = new Date()
    var horas = horario.getHours()
    divs.innerHTML = `Agora é ${horas} horas`
    if (horas >= 0 && horas < 12) {
        msm.innerHTML = 'Bom dia'
        document.body.style.background = 'rgb(192, 201, 111)'
    } else if (horas >= 12 && horas < 18) {
        msm.innerHTML = 'Boa tarde'
        msm.style.color = 'rgb(192, 201, 111'
        document.body.style.background = '#e2Cd9f'
    } else {
        if (horas >= 18) {
            msm.innerHTML = 'Boa noite'
            document.body.style.background = ' rgb(63, 63, 97)'
           
        }
    }
}
