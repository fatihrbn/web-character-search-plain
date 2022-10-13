// display error message
const errorName = document.getElementById('error-name');
const errorNim = document.getElementById('error-nim');

// validate on input in name
const onInputName = document.getElementById('name-input');
onInputName.addEventListener('input', (e) => {
  const value = e.target.value;
  value.split('').map(item => {
    if(!alphabet.includes(item) && !commonSymbol.includes(item) && !item.includes(' ')) {
      onInputName.value = value.slice(0, value.length - 1);
      errorName.textContent = '*Name cannot contain number and uncommon symbol';
    } else {
      errorName.textContent = '';
    }
  })
})

// validate on input in nim
const onInputNim = document.getElementById('nim-input');
onInputNim.addEventListener('input', (e) => {
  const value = e.target.value;
  value.split('').map(item => {
    if(!numbers.includes(item) || item.includes(' ')) {
      onInputNim.value = value.slice(0, value.length - 1);
      errorNim.textContent = '*NIM cannot contain alphabets, space, and symbol';
    } else {
      errorNim.textContent = '';
    }
  })
})