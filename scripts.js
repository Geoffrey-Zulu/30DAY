const date = new Date();
let day = date.getDate();
let time = date.getHours();
let repeater;
switch(day){
case 8:
  repeater = 1
    break;
case 9:
  repeater = 2
    break;  
case 10:
  repeater = 3
    break;  
case 11:
  repeater = 4
    break;
case 12:
  repeater = 5
    break;  
case 13:
  repeater = 6
    break;  
case 14:
  repeater = 7
    break;  
case 15:
  repeater = 8
    break;  
case 16:
  repeater = 9
    break;  
case 17:
  repeater = 10
    break;  
case 18:
  repeater = 11
    break;  
case 19:
  repeater = 13
    break;  
case 20:
  repeater = 14
    break;  
case 21:
  repeater = 15
    break;  
case 22:
  repeater = 16
    break;  
case 23:
  repeater = 17
    break;  
case 24:
  repeater = 18
    break;
case 25:
  repeater = 19
    break;
case 26:
  repeater = 20
    break;
case 27:
  repeater = 21
    break;
case 28:
  repeater = 22
    break;
case 29:
  repeater = 23
    break;
case 30:
  repeater = 24
    break;
case 31:
  repeater = 25
    break;
case 1:
  repeater = 26
    break;
case 2:
  repeater = 27
    break;
case 3:
  repeater = 28
    break;
case 4:
  repeater = 29
    break;
case 5:
  repeater = 30
    break;
}



function morning(){
  document.getElementById("time").innerHTML = "MORNING";
}
function afternoon(){
  document.getElementById("time").innerHTML = "AFTERNOON";
}

function evening(){
  document.getElementById("time").innerHTML = "EVENING"
} 
 
switch(time){
case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:
morning();
  break;

case 12:case 13:case 14:case 15:case 16:case 17:
afternoon();
  break;
  
case 18:case 19:case 20:case 21:case 22:case 23:case 0:case 1:case 2:case 3:
evening();
  break;

 default: document.getElementById("time").innerHTML = "DAY"
}


let days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

function grab(){
  let done = document.querySelectorAll(".day")
  for (let i = 0; i < repeater; i++) {
    done[i].id = "passed"
  }
}

grab()

switch(repeater){
  case 1: 
    document.getElementById("2day").innerHTML = days[0]
    break;
  case 2:
    document.getElementById("2day").innerHTML = days[1]
    break;
  case 3:
    document.getElementById("2day").innerHTML = days[2]
    break;
  case 4:
    document.getElementById("2day").innerHTML = days[3]
    break;
  case 5:
    document.getElementById("2day").innerHTML = days[4]
    break;
  case 6:
    document.getElementById("2day").innerHTML = days[5]
  break;
  case 7:
    document.getElementById("2day").innerHTML = days[6]
    break;
  case 8:
    document.getElementById("2day").innerHTML = days[7]
    break;
  case 9:
    document.getElementById("2day").innerHTML = days[8]
    break;
  case 10:
    document.getElementById("2day").innerHTML = days[9]
    break;
  case 11:
    document.getElementById("2day").innerHTML = days[10]
    break;
  case 12:
    document.getElementById("2day").innerHTML = days[11]
    break;
  case 13:
    document.getElementById("2day").innerHTML = days[12]
    break;
  case 14:
    document.getElementById("2day").innerHTML = days[13]
    break;
  case 15:
    document.getElementById("2day").innerHTML = days[14]
    break;
  case 16:
    document.getElementById("2day").innerHTML = days[15]
    break;
  case 17:
    document.getElementById("2day").innerHTML = days[16]
    break;
  case 18:
    document.getElementById("2day").innerHTML = days[17]
    break;
  case 19:
    document.getElementById("2day").innerHTML = days[18]
    break;
  case 20:
    document.getElementById("2day").innerHTML = days[19]
    break;
  case 21:
    document.getElementById("2day").innerHTML = days[20]
    break;
  case 22:
    document.getElementById("2day").innerHTML = days[21]
    break;
  case 23:
    document.getElementById("2day").innerHTML = days[22]
    break;
  case 24:
    document.getElementById("2day").innerHTML = days[23]
    break;
  case 25:
    document.getElementById("2day").innerHTML = days[24]
    break;
  case 26:
    document.getElementById("2day").innerHTML = days[25]
    break;
  case 27:
    document.getElementById("2day").innerHTML = days[26]
    break;
  case 28:
    document.getElementById("2day").innerHTML = days[27]
    break;
  case 29:
    document.getElementById("2day").innerHTML = days[28]
    break;
  case 30:
    document.getElementById("2day").innerHTML = days[29]
    break;
    default:
      document.getElementById("2day").innerHTML = '0';
}

function PageTranstion(){
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
  let element = document.body;
  element.classList.toggle('light-mode')
})
}
PageTranstion ();



