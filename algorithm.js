const po = document.querySelector('.phaseOne');
const secPhase = document.querySelector('.phaseSecond');
const thirdPhase = document.querySelector('.phaseThird');
const fourthPhase = document.querySelector('.phaseFourth');
const fifthPhase = document.querySelector('.phaseFifth');
const datebar = document.querySelector('.dateb');
const button = document.querySelector('.click');
const dateinf = document.querySelector('.dateinfo');
const Name = document.querySelector('.name');
const nameBox = document.querySelector('.namebox');
const warnAlert = document.querySelector('.Wmessage');
const intTime = document.querySelector('.interTime');
const Btime = document.querySelectorAll('.inputBT');
const Merid = document.querySelector('#maridian');
const namet = document.querySelector('.nametag');
const opt = document.querySelector('.datebtn');

let stp = [0,0];
let DetailStore = [];

const takedate = () => new Date();

const RemLtime = [
    takedate().getDate(),
    takedate().getMonth(),
    takedate().getFullYear(),
    takedate().getHours(),
    takedate().getMinutes()
]

namet.addEventListener('click', () => {
    nameBox.classList.add('focused')
    Name.focus();
})

Name.addEventListener('focus', () => {
    nameBox.classList.add('focused')
});
Name.addEventListener('focusout', () => {
    if (Name.value === '') {
         nameBox.classList.remove('focused');
         stp[0] = 0;
    }else {
        if (Name.value.length > 20) {
            Name.value = Name.value.slice(0,20);
            Sizeinform('Your name is out of range(20 letters MAX)', 10)
        }
        stp[0] = 1;
        Name.style.border = 'none';
    }
    if (stp[0]+stp[1] === 2) {
        ston(1)
    }else {
        ston(0)
    }
});

datebar.addEventListener('input', () => {  
    if (datebar.value !== '') {
        datebar.style.border = 'none';
        opt.classList.add('datefocused');
        stp[1] = 1;
    }else {
        opt.classList.remove('datefocused');
        stp[1] = 0;
    }
    if (stp[0]+stp[1] === 2) {
        ston(1)
    }else {
        ston(0)
    }
});

let timeT = [0,0,0];
Btime[0].addEventListener('keyup', event => SupportBtime(event,1));
Btime[1].addEventListener('keyup', event => SupportBtime(event,2));

function SupportBtime(event,value) {
    let togg = 0;
    const time = [0,1];
    let timeCounter;
    if (takedate().getHours() === 0 && time.includes(takedate().getMinutes())) {
        togg = 1;
        let timeLimit = 120;
        const text = "•You may wait for the next 2 Minutes as there are no Heigher times remaining.";
        warnAlert.style.bottom = '-60px';
        Btime[0].readOnly = true;
        Btime[1].readOnly = true;
        Merid.disabled = true;
        button.disabled = true;
        timeCounter = setInterval(() => {
            const timeRem = timeLimit--;
            warnAlert.innerHTML = text+`(${Math.floor(timeRem/60)}:${timeRem%60 < 10 ? '0'+timeRem%60 : timeRem%60})`;
        },1000);
    }
    setTimeout(() => {
        if (togg) {
            Btime[0].readOnly = false;
            Btime[1].readOnly = false;
            Merid.disabled = false;
            button.disabled = false;
            warnAlert.innerHTML = "";
            clearInterval(timeCounter);
        }
        ston(4);
        if (value) value == 1 ? Btime1(event) : Btime2(event);
    },122000*togg);
}


function Btime1(event) {
    if (event.key === 'Enter') {
        Btime[1].focus();
        return;
    }
    timeT[0] = 1;
    if (Btime[0].value === '') {
        Btime[0].style.border = "1px solid rgb(229,9,19)";
        timeT[0] = 0;
        return;
    }else if (Number(Btime[0].value) > 12) {
        if (ston(3) === 3) {
            Btime1Conjugator();
            return;
        }
        Btime[0].value = '12';
        Btime[0].style.border = "1px solid rgb(229,9,19)";
        warnAlert.innerHTML = "• Time is taken as 12hr format."
        ston(4);
        setTimeout(() => {
            Btime[0].style.border = "1px solid green";
        },1000);
        ston(2);
    }else {
        Btime[0].style.border = "1px solid green";
    }
    
    if (ston(3) === 3) {
        Btime1Conjugator();
    }
    
}

function Btime1Conjugator() {
    if (advant(1) >= takedate().getHours()) {
         if(takedate().getMinutes()) {
             const mintSeek = advant(2);
             Btime[0].value = mintSeek[1];
             if (Merid.value != mintSeek[0]) {
                  Merid.style.border = '1px solid red';
                  timeT[2] = 1;
             }
         }
         else {
             const hourSeek = advant(2,true);
             Btime[0].value = hourSeek[1];
             if (Merid.value != hourSeek[0]) {
                  Merid.style.border = '1px solid red';
                  timeT[2] = 1;
             }
         }
    }
}
function Btime2Conjugator() {    
    if (Btime[1].value >= takedate().getMinutes() && Btime[0].value && (advant(1)-12*timeT[2]) == takedate().getHours()) {
         Btime[1].value = takedate().getMinutes()-1;         
    }
}

function Btime2(event) {
    if (event.key === 'Enter') {
        warnAlert.innerHTML = "• Meridian needs DIRECT touch."
        ston(4);
        ston(2);
        return;
    }
    timeT[1] = 1;
    if (Btime[1].value === '') {
        timeT[1] = 0;
        Btime[1].style.border = "1px solid rgb(229,9,19)";
    }else if (Number(Btime[1].value) > 59) {
        Btime[1].value = '59';
        warnAlert.innerHTML = "• Minute should exist within '59'.";
        ston(4);
        Btime[1].style.border = "1px solid rgb(229,9,19)";
        setTimeout(() => {
            Btime[1].style.border = "1px solid green";
        },1000);
        ston(2);
    }else {
        Btime[1].style.border = "1px solid green";
    }
    if (ston(3) === 3) {
        Btime2Conjugator();
    }
}

Merid.addEventListener('input',() => {
    if (calYears(DetailStore)[0]) return;
    if (Btime[0].value === '') return;
    if (timeT[2]) {
        Merid.style.border = 'none';
        timeT[2] = 0;
    }
    Btime1Conjugator();
    Btime2Conjugator();
    
});


function advant(value, sec=0) {
    if(value === 1) {
        let sent = 0;
        if(Number(Btime[0].value) != 12) sent = Number(Btime[0].value);
        sent = Merid.value == 1 ? sent : sent + 12;
        return sent;
    }
    if(value === 2) {
        let med = [1,0]
        const value = sec ? takedate().getHours()-1 : takedate().getHours();
        if (value > 12) {
            med[0] = 2;
            med[1] = value - 12;
        }else {
            med[1] = value;
        }
        return med;
    }
    
}

button.addEventListener('click', dateCal);

let bool = 0;

function dateCal() {
    if (bool === 1) return callSecondPhase();
    
    if (datebar.value === '' || Name.value === '') {
        if (datebar.value === '') {
            datebar.style.border = '1px solid rgb(229,9,19)';
        }
        if (Name.value === '') {
            Name.style.border = '1px solid rgb(229,9,19)';
        }
        warnAlert.innerHTML = "•You should fill all BLOCKS...!";
        ston(4);
        return;
    };
    Name.style.border = 'none';
    datebar.style.border= 'none';
    const years = calYears([datebar.value.split("-")]);
    if (!years && years !== 0) {
        ston(6);
        return;
    }
    DetailStore.push(datebar.value.split("-"));
    displayItems.push(Name.value);
    warnAlert.innerHTML = '';
    ston(0)
    bool = 1;
    nameBox.style.opacity = '0';
    datebar.style.opacity = '0';
    dateinf.style.opacity = '0';
    button.style.opacity = '0';
    setTimeout(() => {
        nameBox.style.display = 'none';
        datebar.style.display = 'none';
        dateinf.style.display = 'none';
    },350);
    setTimeout(() => {
        intTime.style.display = 'block';
        setTimeout(() => {
            intTime.style.opacity = '1';
            button.style.opacity = '1';
            SupportBtime();
        },100);
    },360);
}
function callSecondPhase() {
    if (timeT[0]+timeT[1]+timeT[2] !== 2) {
        if (timeT[2] === 1) {
            warnAlert.innerHTML = "•Scientific Determinism Is Denied..!"
            return;
        };
        if (timeT[0]+timeT[1] === 0) {
            Btime[0].style.border = "1px solid rgb(229,9,19)";
            Btime[1].style.border = "1px solid rgb(229,9,19)";
        }else {
            timeT[0] === 0 ? Btime[0].style.border = "1px solid rgb(229,9,19)":Btime[1].style.border = "1px solid rgb(229,9,19)"
        }
        return;
    }
    po.style.transition = 'all 0.7s ease-in-out 0.2s';
    po.style.setProperty('--opa','0');
    setTimeout(() => {
        po.style.setProperty('--dis','none');
    },900);
    DetailStore.push([Btime[0].value,Btime[1].value,Merid.value]);
    
    const UsfCheck = [displayItems[2],DetailStore,RemLtime];
    const fromStorage = JSON.parse(localStorage.getItem('enrollList'));
    
    if (!fromStorage) {
        localStorage.setItem('enrollList',JSON.stringify([UsfCheck]));
        setTimeout(() => secondPhaseCall(),910);
    }else {
        const get = questor(fromStorage,UsfCheck)
        
        if (get[0] === 0) {
            fromStorage.push(UsfCheck)
            localStorage.setItem('enrollList',JSON.stringify(fromStorage));
            setTimeout(() => secondPhaseCall(),910);
        }else {
            const remOfL = fromStorage[get[1]][2];
            const [hr,min] = [
                remOfL[3] < 10 ? '0'+remOfL[3] : remOfL[3],
                remOfL[4] < 10 ? '0'+remOfL[4] : remOfL[4]
            ]
            const contentL = `• Your First Visit: ${remOfL[0]}/${remOfL[1]}/${remOfL[2]} ${hr}:${min} WELCOME!`;
            Sizeinform(contentL, 10)
            setTimeout(() => sizeRnote.innerHTML = '• For REINFORCEMENT, clear your browsing DATA.',6000);                  
            setTimeout(() => FifthHandle(1),100);
        }
        
    }

}

//FUNCTIONS AS ALGORITHAMS

function ston(value) {    
    const msg = "• These seems FAIR...!";
    if (value === 1) {
        const check = calYears([datebar.value.split("-")])[0];
        if (check) {
            warnAlert.innerHTML = msg;
            warnAlert.style.bottom = '-40px';
            warnAlert.style.color = '#34b351';
            Name.style.border = 'none';
            datebar.style.border = 'none';
            return;
        }
        if (check === 0) {
            warnAlert.innerHTML = '•Selecting current date can result in certain Limitations.';
            ston(5);
        }else {
            ston(6)
        }
    }
    if (value === 2) {
        setTimeout(() => {
            warnAlert.innerHTML = "";
        },3000);
    }
    if (value === 3) {
        const check = [
            takedate().getFullYear(),
            takedate().getMonth()+1,
            takedate().getDate()
        ]
        let test = 0;
        if (check[0] == DetailStore[0][0]) test = 1;
        if (check[1] == DetailStore[0][1]) test = 2;
        if (check[2] == DetailStore[0][2]) test = 3;
        return test;
    }
    if (warnAlert.innerHTML === msg) {
        warnAlert.innerHTML = '';
    }
    if (value === 4) warnAlert.style.bottom = '-40px';
    if (value === 5) warnAlert.style.bottom = '-50px';
    if (value === 6) {
        warnAlert.innerHTML = "•Your date of birth is too fair to get ACCEPTED..!";
        ston(4);
    }
    warnAlert.style.color = 'red';
}

function calYears(Data,rec = 0) {
  
  if (!Data) return false
  
  const birthDetail = [
      Number(Data[0][2]),
      Number(Data[0][1]),
      Number(Data[0][0]),
      [
          takedate().getHours(),
          takedate().getMinutes(),
          takedate().getSeconds(),
          takedate().getMilliseconds()
      ]
  ];
  
  if (Data.length === 2 && !rec) {
      Data[1][0] = Number(Data[1][0]);
      Data[1][1] = Number(Data[1][1]);
      Data[1][2] = Number(Data[1][2]);
      let Subsuitor = Data[1][0];
      if (Data[1][0] === 12) Subsuitor = 0;
      if (Data[1][2] === 2) Subsuitor += 12;
     
      birthDetail[3][0] = Subsuitor;
      birthDetail[3][1] = Data[1][1];
      birthDetail[3][2] = 30;
      birthDetail[3][3] = 500;
  }
  
  const calcDate = [
      31,
      12,
      takedate().getFullYear(),
      [23,59,59,1000]
  ]
  const dateTo = [
      takedate().getDate(),
      takedate().getMonth()+1,
      takedate().getFullYear(),
      [
        takedate().getHours(),
        takedate().getMinutes(),
        takedate().getSeconds(),
        takedate().getMilliseconds()
      ]
  ]
  
  const enorm = [
    calcDate[0]-birthDetail[0],
    calcDate[1]-birthDetail[1],
    calcDate[2]-birthDetail[2],   
    calcDate[3][0]-birthDetail[3][0],
    calcDate[3][1]-birthDetail[3][1],
    calcDate[3][2]-birthDetail[3][2],
    calcDate[3][3]-birthDetail[3][3]
  ]
  const lite = [
    calcDate[0]-dateTo[0],
    calcDate[1]-dateTo[1],
    calcDate[2]-dateTo[2],
    calcDate[3][0]-dateTo[3][0],
    calcDate[3][1]-dateTo[3][1],
    calcDate[3][2]-dateTo[3][2],
    calcDate[3][3]-dateTo[3][3]
  ]
  const timed = [
    enorm[3]*60*60*1000+enorm[4]*60*1000+enorm[5]*1000+enorm[6],
    lite[3]*60*60*1000+lite[4]*60*1000+lite[5]*1000+lite[6]
  ]
  
  const Es1 = 24*60*60*1000;
  const Es2 = 5*60*60*1000+48*60*1000+46*1000;
  
  const emillHolder = ((enorm[0]+enorm[2]*365)*Es1+enorm[1]*30.42*Es1+enorm[2]*Es2+timed[0])-((lite[0]+lite[1]*30.42+lite[2]*365)*Es1+lite[2]*Es2+timed[1]);
  if (emillHolder < 0) return false
  
  const yearex = [Math.floor(emillHolder/(365*Es1 + Es2)),emillHolder%(365*Es1 + Es2)];
  const monthex = [Math.floor(yearex[1]/(30.42*Es1)),yearex[1]%(30.42*Es1)]
  const millex = [Math.floor(monthex[1]/1000),monthex[1]%1000];
  const secex = [Math.floor(millex[0]/60),millex[0]%60];
  const minex = [Math.floor(secex[0]/60),secex[0]%60];
  const horex = [Math.floor(minex[0]/24),minex[0]%24];
  
  const retStatement = [yearex[0],monthex[0],horex[0],horex[1],minex[1],secex[1],millex[1]];
  
  return [emillHolder,retStatement];
}