let titre = document.getElementById("titre")
let afficheur = document.getElementById("afficheur")
let stop = document.getElementById("stop")
let play = document.getElementById("play")
let workSession = 24
let breakSession = 4
let seconde = 60
let progress = true

let w = document.querySelector("#w");
let work = w.getContext("2d");

work.lineWidth = 10

const centreX = 150, centreY = 150;
const centreX2 = 400, centreY2 = 300;

stop.addEventListener('click', (e) => {
    // workSession = 1
    // breakSession = 1
    // seconde = 15
    // progress = true
    // clearInterval(timer)
    // afficheur.innerText = `${workSession} : ${seconde}`
    // w.style.display = 'none'
    document.location.reload()
})

play.addEventListener('click', (e) => {
    progress = !progress
    chrono()
})

let timer
let progression = -Math.PI / 2
let progression2 = -Math.PI / 2

const chrono = () => {
    clearInterval(timer)
    timer = setInterval(() => {
        if (!progress) {
            if (workSession > 0) {
                titre.innerText = 'WORK SESSION'
                titre.style.color = 	'#1E90FF' 
                afficheur.style.color = "#1E90FF" 
                play.style.backgroundColor= "#1E90FF" 
                stop.style.backgroundColor= "#1E90FF" 
                work.strokeStyle = "#1E90FF";
                progression2 = -Math.PI / 2
                if (seconde > 0) {
                    seconde--
                    afficheur.innerText = `${workSession} : ${seconde}`
                    work.beginPath();
                    progression = progression + 0.24 * Math.PI / 180
                    work.arc(centreX, centreY, 100, -Math.PI / 2, progression);
                    work.stroke();
                }
                else {
                    seconde += 60
                    workSession--
                    afficheur.innerText = `${workSession} : ${seconde}`
                }
            } else {
                titre.innerText = 'BREAK SESSION'
                titre.style.color = 	'#00BFFF' 
                afficheur.style.color = "#00BFFF" 
                play.style.backgroundColor= "#00BFFF" 
                stop.style.backgroundColor= "#00BFFF"
                work.strokeStyle = "#00BFFF";
                progression = -Math.PI / 2
                if (breakSession > 0) {
                    if (seconde > 0) {
                        seconde--
                        afficheur.innerText = `${breakSession} : ${seconde}`
                        work.beginPath();
                        progression2 = progression2 + 1.2 * Math.PI / 180
                        work.arc(centreX, centreY, 100, -Math.PI / 2, progression2);
                        work.stroke();
                    }
                    else {
                        seconde += 60
                        breakSession--
                        afficheur.innerText = `${breakSession} : ${seconde}`
                    }
                } else {
                    workSession = workSession + 24;
                    breakSession = breakSession + 4;
                }

            }
        } else clearInterval(timer)
    }, 1000);
}
