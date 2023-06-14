const clockHands = document.querySelectorAll('.Hand');
const opacClock = document.querySelectorAll('.subC');
const SecHand = document.querySelector('#secR');
const textCk = document.querySelector('.clockInclude');

let clockW;
function startClock() {
    clockW = setInterval(() => {
        const TimeLine = calYears(DetailStore)[1];
        Aligner(clockHands[0],TimeLine[0]/80);
        Aligner(clockHands[1],TimeLine[1]/12);
        Aligner(clockHands[2],TimeLine[2]/30.42);
        Aligner(clockHands[3],TimeLine[3]/24);
        Aligner(clockHands[4],TimeLine[4]/60);
        Aligner(SecHand,TimeLine[5]/60)
        Aligner(clockHands[5],TimeLine[6]/1000);
    })
}

function Aligner(element,rotorRatio) {
    element.style.setProperty('--rotor',rotorRatio*360);
}

function ThirdOrganizer(Desic) {
    
    if (Desic === 1) {
        opacClock[0].style.opacity = '1';
        opacClock[0].style.width = '300px';
        opacClock[0].style.height = '300px';
        setTimeout(() => ThirdOrganizer(2),1000);
    }
    
    if (Desic === 2) {
        opacClock[2].style.opacity = '1';
        opacClock[3].style.opacity = '1';
        opacClock[4].style.opacity = '1';
        setTimeout(() => ThirdOrganizer(3),500);
    }
    
    if (Desic === 3) {
        opacClock[0].style.setProperty('--cent',1);
        setTimeout(() => ThirdOrganizer(4),500);
    }
    
    if (Desic === 4) {
        opacHeight(0,80);
        opacHeight(1,95);
        opacHeight(2,105);
        opacHeight(3,13);
        opacHeight(4,16);
        opacHeight(5,19);
        startClock();
        opacClock[1].style.opacity = '1';
        opacClock[0].style.color = 'rgb(0,0,0)';
        setTimeout(() => textCk.innerHTML = "ONE-DAY",10000);
        setTimeout(() => opacClock[0].style.zIndex = '20',12000);
        setTimeout(() => ThirdOrganizer(5),13000);
    }
    
    if (Desic === 5) {
        clearInterval(clockW);
        clockHands.forEach((items,index) => clockHands[index].style.transition = '3s ease');
        SecHand.style.transition = '1s ease';
        Aligner(clockHands[0],1);
        Aligner(clockHands[1],1);
        Aligner(clockHands[2],1);
        Aligner(clockHands[3],1);
        Aligner(clockHands[4],1);
        Aligner(clockHands[5],1);
        Aligner(SecHand,1)
        setTimeout(() => {
            opacClock[0].style.zIndex = '0';
            setTimeout(() => {
                textCk.style.fontSize = '270%';
                textCk.innerHTML = 'MAY BE AN END';
            },10)
        },4000)
        setTimeout(() => {
            textCk.innerHTML = 'OR';
        },6000)
        setTimeout(() => {
            textCk.innerHTML = 'THE BEGINNING';
            textCk.style.fontSize = '260%';
            setTimeout(() => ThirdOrganizer(6),2000);
        },8000)
    }
    
    if (Desic === 6) {
        thirdPhase.style.transition = '1s';
        thirdPhase.style.opacity = '0';
        setTimeout(() => thirdPhase.style.display = 'none',1000)
        setTimeout(() => fourthDealer(1),1000)
    }
}

function opacHeight(index,height) {
    clockHands[index].style.opacity = '1';
    clockHands[index].style.height = height+'px';
}