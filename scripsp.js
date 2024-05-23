let min = document.querySelector('.min')
let sec = document.querySelector('.sec')
let msec = document.querySelector('.msec')

let minutos = 0
let segundos = 0
let milesimos = 0
let cron

function start() {
    stop();
    cron = setInterval(function(){
        milesimos++
      time()
    }, 10)
}

function stop() {
    
    clearInterval(cron)
    
}

function reset() {
    stop()
    minutos = 0;
    segundos = 0;
    milesimos = 0;
    display()
}

function time() {
    if (milesimos > 99) {
        milesimos = 0;
        segundos++;
    } if (segundos > 59) {
        segundos = 0;
        minutos++;
    } if (minutos > 59) {
        minutos = 0
    }
    display()
}

function display() {
    min.innerHTML = minutos;
    sec.innerHTML = segundos;
    msec.innerHTML = milesimos;
}