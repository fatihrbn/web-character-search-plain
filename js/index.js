// characters
const numbers = '0123456789';
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const commonSymbol = '.,\'-';

// to get HTML tag by id to display output value in HTML
const nameOutput = document.getElementById('name-output');
const nimOutput = document.getElementById('nim-output');
const nameFinal = document.getElementById('name-final-output');
const nimFinal = document.getElementById('nim-final-output');

const nameStatus = document.getElementById('status-name');
const nimStatus = document.getElementById('status-nim');

const nameCharStatus = document.getElementById('character-status-name');
const nimCharStatus = document.getElementById('character-status-nim');

let isNameCompleted = false;
let isNimCompleted = false;
let isRunning = false;


// function to set a delay
const delay = async (milisec) => {
	return new Promise(resolve => {
		setTimeout(() => { resolve('') }, milisec);
	})
}


// function to display status
const checkStatus = () => {
  nameStatus.innerText = isNameCompleted ? '✔' : '!';  
  nimStatus.innerText = isNimCompleted ? '✔' : '!';  

  if(isNameCompleted) {
    nameStatus.classList.add('icon-complete');
    nameStatus.classList.remove('icon-idle');
    nameCharStatus.innerText = 'string accepted';
    nameFinal.style.color = 'green';
  } else {
    nameStatus.classList.add('icon-idle');
    nameStatus.classList.remove('icon-complete');
  }

  if(isNimCompleted) {
    nimStatus.classList.add('icon-complete');
    nimStatus.classList.remove('icon-idle');
    nimCharStatus.innerText = 'string accepted';
    nimFinal.style.color = 'green';
  } else {
    nimStatus.classList.add('icon-idle');
    nimStatus.classList.remove('icon-complete');
  }
}

// function to generate name char
const generateNameChar = async (nameInput, nimInput, milis) => {
  for(let i = 0; i < nameInput.length; i++) {

    let nameCharList = alphabet.includes(nameInput[i]) ? alphabet : commonSymbol;

    for(let j = 0; j < nameCharList.length; j++) {
      nameOutput.innerText = nameCharList[j]

      if(nameInput[i] === ' ') {
        nameFinal.innerText += String.fromCharCode(160);
        nameOutput.innerText = '';
        break;
      }

      await delay(milis);

      if(nameInput[i] === nameCharList[j]) {
        nameFinal.innerText += nameCharList[j];
        nameOutput.style.color = 'green';
        nameCharStatus.style.color = 'green';
        nameCharStatus.innerText = 'character accepted';
        await delay(milis);
        nameCharStatus.innerText = '';
        nameOutput.style.color = 'black';
        break;
      } else {
        nameOutput.style.color = 'red';
        nameCharStatus.style.color = 'red';
        nameCharStatus.innerText = 'character rejected';
        await delay(milis/2);
        nameCharStatus.innerText = '';
        nameOutput.style.color = 'black';
      }
    }
  }    
  
  if(nameInput.length != 0 && nameInput.length === nameFinal.innerText.length) {
    isNameCompleted = true;
    nameCharStatus.innerText = '';
    await delay(milis);
    checkStatus();
    isRunning = false;
  }
  await delay(milis/2);
  generateNimChar(nimInput, milis);
}

// function to generate nim 
const generateNimChar = async (nimInput, milis) => {
  isRunning = true;
  for(let i = 0; i < nimInput.length; i++) {
    for(let j = 0; j < numbers; j++) {
      nimOutput.innerText = numbers[j];
      await delay(milis);

      if(nimInput[i] === numbers[j]) {
        nimFinal.innerText += numbers[j];
        nimOutput.style.color = 'green';  
        nimCharStatus.style.color = 'green';
        nimCharStatus.innerText = 'character accepted';
        await delay(milis);
        nimOutput.style.color = 'black'
        nimCharStatus.innerText = '';
        break;
      } else {
        nimOutput.style.color = 'red';  
        nimCharStatus.style.color = 'red';
        nimCharStatus.innerText = 'character rejected';
        await delay(milis/2);
        nimOutput.style.color = 'black'
        nimCharStatus.innerText = '';
      }
    }
  }
  if(nimInput.length != 0 && nimInput.length === nimFinal.innerText.length) {
    isNimCompleted = true;
    nimCharStatus.innerText = '';
    await delay(milis);
    isRunning = false;
    checkStatus();
  }
}

// onClick or onSubmit button
const onSubmit = document.getElementById('btn');
onSubmit.addEventListener('click', async (e) => {
  e.preventDefault();
  if(!isRunning) { 
    const nameInput = document.getElementById('name-input').value;
    const nimInput = document.getElementById('nim-input').value;

    isRunning = true;
    
    // reset output value 
    nameOutput.innerText = '';
    nimOutput.innerText = '';
    nameFinal.innerText = '';
    nimFinal.innerText = '';
    nameCharStatus.innerText = '';
    nimCharStatus.innerText = '';
    
    // reset status
    isNameCompleted = false;
    isNimCompleted = false;
    checkStatus();
    
    await delay(200);
    generateNameChar(nameInput, nimInput, 1000);
  } else {
    alert('Please wait until the program is done or refresh the website to continue');
  }
})
