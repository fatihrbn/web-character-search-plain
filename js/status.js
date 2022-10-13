const nameStatus = document.getElementById('status-name');
const nimStatus = document.getElementById('status-nim');

let isNameCompleted = false;
let isNimCompleted = false;

let isNameRunning = false;
let isNimRunning = false;

const statusChange = () => {

  nameStatus.innerText = isNameCompleted ? '✔' : '!';  
  nimStatus.innerText = isNimCompleted ? '✔' : '!';  

  if(isNameCompleted) {
    nameStatus.classList.add('icon-complete');
    nameStatus.classList.remove('icon-idle');
    nameOutput.innerText = ''
  } else {
    nameStatus.classList.add('icon-idle');
    nameStatus.classList.remove('icon-complete');
  }

  if(isNimCompleted) {
    nimStatus.classList.add('icon-complete');
    nimStatus.classList.remove('icon-idle');
    nimOutput.innerText = ''
  } else {
    nimStatus.classList.add('icon-idle');
    nimStatus.classList.remove('icon-complete');
  }
}