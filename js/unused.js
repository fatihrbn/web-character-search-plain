// characters
const numbers = ' 0123456789';
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const commonSymbol = ' .,\'-';

// possibility characters of name and nim 
let nameList =  commonSymbol + alphabet;
let nimList = numbers;
let nameArrOutput = [];
let nimArrOutput = [];

// to get HTML tag by id to display output value in HTML
const nameOutput = document.getElementById('name-output');
const nimOutput = document.getElementById('nim-output');
const nameFinal = document.getElementById('name-final-output');
const nimFinal = document.getElementById('nim-final-output');
const dikenaliName = document.getElementById('character-status-name');
const dikenaliNim = document.getElementById('character-status-nim');

let isNameTrue = false;
let isNimTrue = false;

// variable to access index of value
let i = 0;
let j = 0;
let k = 0;
let l = 0;
let nameInterval;
let nimInterval;

const generateNameChar = () => {
  // get name input value
  const nameInput = document.getElementById('name-input').value.split('');

  if(nameInput.length != 0) {

    // dikenali output
    
    // check each characters in name input if it alphabet or symbol
    if(commonSymbol.includes(nameInput[i])){
      nameList = commonSymbol;
    } else {
      nameList = alphabet
    }
    

    nameOutput.innerHTML = nameList[j];
    // display output to end-user
    nameFinal.innerText = nameArrOutput.join('');
    if(nameInput[i] != nameList[j] | nameInput[i] === ' ') {
      nameOutput.innerHTML = nameList[j];
    }
    // conditons if name input value is equal to character interval
    if(nameInput[i] === nameList[j] | nameInput[i] === ' ') {
      if(nameInput[i] == ' ') {
        nameArrOutput.push(String.fromCharCode(160));
        i++;
        return;
      }
      isNameTrue = !isNameTrue;
      nameArrOutput.push(nameList[j]);
      i++
      j = 0;
      return; 
    } else {
      isNameTrue = false;
  }
    
    nameFinal.innerText = nameArrOutput.join('');
    j++;
    
    // stop conditions
    // if(isNameTrue) {
    //   dikenaliName.innerText = 'character dikenali';
    //   dikenaliName.style.color = 'green';
    // } else {
    //   dikenaliName.style.color = 'red';
    //   dikenaliName.innerText = 'character tidak dikenali';
    // }
  }
  if(nameInput.length === nameArrOutput.length) {
    clearInterval(nameInterval);
    if(nameInput.length != 0) {
      isNameCompleted = !isNameCompleted;
      statusChange();
    }

    
    nameFinal.innerText = nameArrOutput.join('');
    nimInterval = window.setInterval(generateNimChar, 1000);
    return;
  }

}

const generateNimChar = () => {
  const nimInput = document.getElementById('nim-input').value.split('');
  if(nimInput.length != 0) {
    // dikenaliNim.innerText = isNimTrue? 'character dikenali' : 'character tidak dikenali';
  
    nimFinal.innerText = nimArrOutput.join('');
  
    if(nimInput[k] === nimList[l]) {
      isNimTrue = !isNimTrue;
      nimArrOutput.push(nimList[l]);
      k++
      l = 0;
    } else {
      isNimTrue = false;
    }
    nimOutput.innerHTML = nimList[l];
    
    nimFinal.innerText = nimArrOutput.join('');
  
  
    if(nimInput.length === nimArrOutput.length) {
      clearInterval(nimInterval);
      if(nimInput.length != 0) {
        isNimCompleted = !isNimCompleted;
        statusChange();
      }
    }
    l++;
    // nimFinal.innerText = nimArrOutput.join('');
  }
}

const onSubmit = document.getElementById('btn').addEventListener('click', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('name-input');
  const nimInput = document.getElementById('nim-input');

  clearInterval(nameInterval);
  clearInterval(nimInterval);

  // reset all index variable, when the button is clicked
  j = 0;
  i = 0;
  k = 0;
  l = 0;  

  // reset output value every time the button is clicked
  nameArrOutput.splice(0, nameArrOutput.length);
  nameFinal.innerText = '';
  nimArrOutput.splice(0, nimArrOutput.length);
  nimFinal.innerText = '';

  // reset error message, variable declaration from inputChecker.js
  errorName.innerText = '';
  errorNim.innerText = '';

  // remove placeholder
  nameInput.placeholder = '';
  nimInput.placeholder = '';

  // reset status boolean
  isNameCompleted = false;
  isNimCompleted = false;
  dikenaliName.innerText = '';
  dikenaliNim.innerText = '';
  
  nameInterval = window.setInterval(generateNameChar, 1000);
  statusChange();

})




