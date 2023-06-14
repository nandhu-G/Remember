const invWel = document.querySelector('.wel');
const sp = document.querySelector('#sing');
const clientName = document.querySelector('.clientName');
const SizeImps = document.querySelector('.sizeWarner');
const callTruth = document.querySelectorAll('.truthSen')
const Truthsnt = document.querySelectorAll('.truthSen');
const notice = document.querySelector('.notice');
const strong = document.createElement("strong");
const strong1 = document.createElement("strong");
const span = document.createElement("span");
const spanc = document.createElement("span");
const span1 = document.createElement("span");
const span2 = document.createElement("span");
const diviNotc = document.createElement("div");
const diviNotc2 = document.createElement("div");
const sizeRnote = document.querySelector('.sizeRem');
const carpet = document.querySelector('.redCarpet');
const fifthtrans = document.querySelectorAll('.opacFifth');

const noticeItems = [
    "NOTICE",
    "T",
    "his is to inform you about the working of an analog clock which is based on your life cycle, ",
    "Remember",
    "ing about this information will help you to be a better understander of the clock, in which the sub-clocks inform about the hours, minutes and milliseconds were as the main three Hands depict about the days, month and years that you have surpass. At twelve all may going to an end.",
    "IT IS STILL RUNNING...!",
    window.screen.height || window.innerHeight+200 || document.documentElement.clientHeight+200,
    window.screen.width || window.innerWidth+200 || document.documentElement.clientWidth+200,
    "• The DIMENSIONS of this DEVICE is too small to fit this site.",
    "• You may ROTATE your device 90deg for better results.!",
    "It won't be accurate because we are dealing",
    "with the most strangest item in the",
    "UNIVERSE",
    "STRING",
    "Remember - it's in Milliseconds"
];

const displayItems = [
    'elcome',
    'Ready..!'
]

function secondPhaseCall() {
    secPhase.style.display = 'block';
    setTimeout(() => {
        secPhase.style.opacity = 1;
    },50)
    setTimeout(() => {
        sp.style.fontSize = '1.5em';
        invWel.style.top = '30%'
        setTimeout(() => {
            lettering(displayItems[0],invWel,65,1);
        },1000)
    },1200)
}

function clitnm(Num) {
    if (Num === 1) setTimeout(() => lettering(displayItems[2],clientName,75,2),200);
    if (Num === 2) {
        invWel.style.opacity = '0';
        setTimeout(() => {
            clientName.style.fontSize = '3.5em';
        },200)
        setTimeout(() => {
            clientName.style.letterSpacing = '20px';
            clientName.style.opacity = '0';
        },850)
        setTimeout(() => {
            clientName.innerHTML = '';
            clientName.style.opacity = '1';
            clientName.style.fontSize = '1.9em';
            clientName.style.letterSpacing = '0px';
            lettering(displayItems[1],clientName,100,3)
        },1700)
    }
    if (Num === 3) {
        setTimeout(() => {
            clientName.style.opacity = '0';
            setTimeout(() => {
                invWel.style.display = 'none';
                clientName.style.display = 'none';
                clitnm(4)
            },1000)
        },850)
    }
    if (Num === 4) {
        if (calYears(DetailStore)[1][0] < 80) noticeinfo();
        else setTimeout(() => fourthDealer(1),10)
    }
    
}

//Brain of regression
function lettering(word,area,time,selec=0) {
    const letter = word.split('');
    let knower = [0,letter.length];
    const intv = setInterval(() => {
        knower[0] +=1;
        area.innerHTML += letter[knower[0]-1]
        if (knower[0] === knower[1]) {
            if (selec) clitnm(selec);
            clearInterval(intv)
        }
    },time)
}

function noticeinfo() {
    
    notice.style.display = "block";
    notice.append(strong);
    notice.append(strong1);
    notice.append(diviNotc);
    
    lettering(noticeItems[0],strong,75);
    strong.style.color = "#2a7b87";
    setTimeout(() => {
        strong1.innerText = noticeItems[1];
        notice.append(span1);
        span1.innerHTML = noticeItems[2];
        notice.append(diviNotc2);
        diviNotc2.append(span);
        diviNotc2.append(spanc)
        span.innerText = noticeItems[3];
        spanc.innerText = noticeItems[3];
        notice.append(span2);
        span2.innerHTML= noticeItems[4];
        notice.style.color = '#1f808f';
        span.style.position = 'absolute';
        spanc.style.color = 'rgba(0,0,0,0)';
        diviNotc2.style.display = 'inline-block';
    },500)
    
    setTimeout(() => {
        span.style.transition = "all 1s ease";
        notice.style.transition = '1s';
        strong.style.transition = '1s';
        notice.style.color = "rgba(0,0,0,0)";
        strong.style.color = "rgba(0,0,0,0)";
        span.style.color = "red";
        span.style.fontSize = "2em";
        
        setTimeout(() => {
            diviNotc.style.color = "#05606e"
            lettering(noticeItems[5],diviNotc,80);
        },1000)
    },15000)
    
    setTimeout(() => {
        diviNotc.style.color = "rgba(0,0,0,0)"
        span.style.color = "rgba(0,0,0,0)"
        setTimeout(() => {
            diviNotc.style.bottom = "50%";
            diviNotc.style.right = "50%";
            diviNotc.style.transform = "translate(50%,50%)";
            diviNotc.style.color = "#01404a"
            diviNotc.style.fontWeight = "bold";
            diviNotc.style.fontSize = "1em";
            diviNotc.innerHTML = "TIME";
            diviNotc.style.backgroundColor = "black";
            diviNotc.style.width = "0.5px";
            diviNotc.style.height = "0.5px";
            setTimeout(() => {
                diviNotc.style.fontWeight = "bold";
                diviNotc.style.transition = "all 1s ease";
                diviNotc.style.letterSpacing = "25px";
                diviNotc.style.color = "rgba(0,0,0)";
                setTimeout(() => {
                    const highval = noticeItems[7] > noticeItems[6] ? noticeItems[7]:noticeItems[6];
                    diviNotc.style.width = highval+'px';
                    diviNotc.style.height = highval+'px';
                },240)
                setTimeout(() => {
                    notice.style.transition = "opacity 1s";
                    notice.style.opacity = "0";
                    setTimeout(() => {
                        notice.style.display = "none";
                        thirdPhase.style.display = 'block';
                        setTimeout(() => ThirdOrganizer(1),20);
                    },600)
                },1500)
            },1500)    
         },2000)
    },18000)
}

if (noticeItems[6] < 400) {
    noticeItems[7] > noticeItems[6]*1.4 ? Sizeinform(noticeItems[9],10):Sizeinform(noticeItems[8],10)
    button.disabled = true;
    Name.disabled = true;
    datebar.disabled = true;
}

if (noticeItems[6] > 907 || noticeItems[7] > 1134) Sizeinform('• Your device is not recommended for this website.!', 10);

let test;
function Sizeinform(content, exsist) {
   SizeImps.style.display = 'flex';
   setTimeout(() => {
       SizeImps.style.top = '35px';
       setTimeout(() => {
           SizeImps.style.top = '10px';
           setTimeout(() => {
              SizeImps.style.borderRadius = '10px';
              SizeImps.style.width = "80%";
              SizeImps.style.height = "10%";
              setTimeout(() => {
                let value = exsist;
                SizeImps.style.transition = 'none';
                SizeImps.style.paddingLeft = '10px';
                sizeRnote.innerHTML = content;
                document.querySelector('#noteEx1').innerHTML = value+'s';
                test = setInterval(() => {
                    value--;
                    document.querySelector('#noteEx1').innerHTML = `${value}s`;
                    if (value === 0) freq();
                },1000)
              },500)
           },300)
       },500)
   },1)
}

document.querySelector('#noteEx2').onclick = () => freq();

function freq() {
    clearInterval(test);
    SizeImps.style.removeProperty('transition');
    SizeImps.style.removeProperty('top');
    SizeImps.style.opacity = "0";
    setTimeout(() => {
       SizeImps.style.display = 'none';
    },500)
}

const scrll = document.querySelector('.slider');
function fourthDealer(Bring) {
    
    if (Bring === 1) {
        fourthPhase.style.display = 'flex';
        lettering(noticeItems[10],callTruth[0],10);
        lettering(noticeItems[11],callTruth[1],12);
        lettering(noticeItems[12],callTruth[2],54);
        setTimeout(() => fourthDealer(2),5000);
    }
    
    if (Bring === 2) {
        Truthsnt.forEach((invisible) => {
            invisible.style.transition = '1s';
            invisible.style.opacity = '0';
        })
        setTimeout(() => fourthDealer(3),1000);
    }
    
    if (Bring === 3) {
        Truthsnt[0].style.display = 'none';
        Truthsnt[2].style.display = 'none';
        setTimeout(() => fourthDealer(4),500);
    }
    
    if (Bring === 4) {
        Truthsnt[1].style.removeProperty('transition');
        Truthsnt[1].innerHTML = '';    
        lettering('STRING',Truthsnt[1],200)
        Truthsnt[1].style.color = '#066978';
        Truthsnt[1].style.opacity = '1';
        Truthsnt[1].style.fontSize = '3em';
        Truthsnt[1].style.fontWeight = '600';
        setTimeout(() => fourthDealer(5),1500);
    }
    
    if (Bring === 5) {
        scrll.classList.add('sliderStart')
        setTimeout(() => fourthDealer(6),1200);
    }
    
    if (Bring === 6) {
        scrll.style.transition = '0.7s linear';
        scrll.style.left = "80%";
        setTimeout(() => scrll.style.removeProperty('left'),1400)
        setTimeout(() => fourthDealer(7),2100);
    }
    
    if (Bring === 7) {
        Truthsnt[1].style.transition = '1s';
        Truthsnt[1].style.letterSpacing = '-26px';
        Truthsnt[1].style.opacity = '0';
        setTimeout(() => fourthDealer(8),1000);
    }
    
    if (Bring === 8) {
        fourthPhase.style.display = 'none';
        setTimeout(() => FifthHandle(1),200);
    }
}

function FifthHandle(priot) {
    
    if (priot === 1) {
        fifthPhase.style.display = 'grid';
        setTimeout(() => {
            fifthPhase.style.transition = '1s linear';
            fifthPhase.style.opacity = '1';
            setTimeout(() => FifthHandle(2),1000);
        },10)
    }
    
    if (priot === 2) {
        fifthPhase.style.width = '94%';
        setTimeout(() => FifthHandle(3),1000);
    }
    
    if (priot === 3) {
        fifthPhase.style.height = '94%';
        setTimeout(() => FifthHandle(4),1000);
    }
    
    if (priot === 4) {
        fifthPhase.style.removeProperty('transition');
        fifthtrans[7].innerHTML = displayItems[2];
        if (displayItems[2].length > 10 && noticeItems[7] < 800) {
            fifthtrans[7].style.transform = 'none';
            fifthtrans[7].style.left = 'auto';
            fifthtrans[7].style.right = '-13%';
        }        
        setTimeout(() => {
            transit(6,0,1)
            fifthtrans[6].style.transition = '1s linear';
            fifthtrans[6].style.height = '100%';
            setTimeout(() => FifthHandle(5),1000);
        },10);
    }
    
    if (priot === 5) {
        transit(1,0.5,1)
        setTimeout(() => {
            document.body.style.transition = '4s';
            document.body.style.backgroundColor = '#153b61';
            setTimeout(() => document.body.style.removeProperty('transition'),4000)
        })
        setTimeout(() => FifthHandle(6),1000);
    }
    
    if (priot === 6) {
        setInterval(() => fifthtrans[2].innerText = calYears(DetailStore)[0],111);
        transit(2,0.5,1)
        setTimeout(() => fifthtrans[2].style.removeProperty('transition'),500);
        setTimeout(() => FifthHandle(7),1000);
    }
    
    if (priot === 7) {
        transit(3,0.5,1)
        setTimeout(() => FifthHandle(8),1000);
    }
    
    if (priot === 8) {
        if (calYears(DetailStore)[1][0] < 80)setInterval(() => fifthtrans[4].innerText = (80*365*24*60*60*1000+80*(5*60*60*1000+48*60*1000+46*1000))-calYears(DetailStore)[0],113);
        else {
            if (calYears(DetailStore)[1][0] > 120) fifthtrans[4].innerText = 'INSANE..!';
            if (calYears(DetailStore)[1][0] < 121) {
                fifthtrans[4].innerText = 'Congragulations you are in 0.01%';
                fifthtrans[4].style.fontSize = '0.45em';
            }
        }
        transit(4,0.5,1)
        setTimeout(() => fifthtrans[4].style.removeProperty('transition'),500);
        setTimeout(() => FifthHandle(9),1000);
        minuteRemR();
    }
    
    if (priot === 9) {
        transit(5,0.5);
        fifthtrans[5].innerText = noticeItems[14];
        let check = 1;
        setInterval(() => {
            if (check) {
                transit(5,0,1);
                check = 0;
            }else {
                fifthtrans[5].style.opacity = '0'
                check = 1;
            }
        },2000)
    }
}

function transit(num,time,trig = 0) {
    if (time) fifthtrans[num].style.transition = `${time}s`;
    if (trig) fifthtrans[num].style.opacity = `${trig/trig}`;
}

let conditionFlow = 0;
function minuteRemR() {
    
    const ctimes = calYears(DetailStore)[1];
    if (ctimes[5] != 0 && ctimes[5] != 60 && !conditionFlow) {
        let countUp = 0;
        const pseudoIn = setInterval(() => {
            countUp += 1;
            fifthPhase.style.setProperty('--getRotv',((countUp/10)/60)*360);
            if (countUp/10 == ctimes[5]) {
                conditionFlow = 1;
                minuteRemR()
                clearInterval(pseudoIn);
            }
        })
    }
    if (conditionFlow || ctimes[5] == 0 || ctimes[5] == 60) {
        setInterval(() => {
            const ctime = calYears(DetailStore)[1];
            fifthPhase.style.setProperty('--getRotv',((ctime[5]+ctime[6]/1000)/60)*360);
        },30)
    }
}

function questor(ListE,valueO) {
     let decision = 0;
     let where = -1;
     ListE.forEach((value,index) => {
            if (value[0].toUpperCase() === valueO[0].toUpperCase()) {
                let decide = 0;
                
                value[1][0].forEach((nest,index) => {
                     if (nest === valueO[1][0][index]) decide++;
                })
                value[1][1].forEach((nest,index) => {
                     if (nest === valueO[1][1][index]) decide++;
                })
                if (decide === 6) {
                    if (where >= 0) return;
                    where = index;
                    decision = 1;
                };
            }
     })
     return [decision,where];
}

const searchEngine = navigator.userAgent.indexOf('Chrome') > -1;
if (!searchEngine) Sizeinform('• This website is REFERENCED to Chrome', 15);