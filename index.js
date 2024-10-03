let hour = 0;
let min = 0;
let sec = 0;

let gethour = document.getElementById("hour");
let getmin = document.getElementById("min");
let getsec = document.getElementById("sec");

let interval;

// start

function start() {
  interval = setInterval(function () {
    if (sec >= 0) {
      sec++;
      getsec.innerHTML = sec;
    }
    if (sec < 10) {
      getsec.innerHTML = "0" + sec ;
    }
    if (sec >= 60) {
      sec = 0;
      min++;
      getmin.innerHTML =   min + ":";
    }
    if (min < 10) {
      getmin.innerHTML = "0" + min + ":" ;
    }
    if (min >= 60) {
      min = 0;
      hour++;
      gethour.innerHTML = hour;
    }
    if (hour < 10) {
      gethour.innerHTML = "0" + hour + ":";
    }
  }, );
}

function paus() {
  clearInterval(interval);
}

function res() {
  if (sec >= 0) {
    sec = 0;
    min = 0;
    hour = 0;
    getsec.innerHTML = "0" + sec;
    getmin.innerHTML = "0" + min + " : ";
    gethour.innerHTML = "0" + hour + " : ";
    clearInterval(interval)
  }

}
