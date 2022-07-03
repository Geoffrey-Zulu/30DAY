const date = new Date();
day = date.getDate()
let time =  date.getHours()

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
  
case 0:case 1:case 2:case 3:case 18:case 19:case 20:case 21:case 22:case 23:
evening();
  break;

 default: document.getElementById("time").innerHTML = "DAY"
}