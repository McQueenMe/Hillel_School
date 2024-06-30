// get all elements from html
const nameEl = document.querySelector('.text');
const messageEl = document.querySelector('.textarea');
const telephone = document.querySelector('.telephone');
const emailEl = document.querySelector('.email');
const buttonEl = document.querySelector('.js-button');
const formEl = document.querySelector('.forma')

//regEx - вираз для валідації email
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


//---------------------------Validation-------------------\\

//email
function isValidEmail(email) {
   return regex.test(email.value);
}
//textarea
function isTextEnought(mes) {
   if (mes.value.length > 5) {
      return true
   } else return false
}
//telephone
function isTelValid(tel) {
   if (tel.value.length === 13 && tel.value.includes('+380') && !isNaN(Number(tel.value))) {
      return true
   } else return false
}
//name 
function isNameExist(name) {
   if (name.value.length > 0 && isNaN(Number(name.value))) {
      return true
   }
}
//get values from customer
function outputValues(formVal) {
   if (formVal) {
      console.log(nameEl.value);
      console.log(messageEl.value);
      console.log(telephone.value);
      console.log(emailEl.value);
   }
}

//---------------------------functions for valid inputs---------------------\\

function invalidTextMessage(messageEl) {
   let error1 = messageEl.nextElementSibling;
   console.log(error1);
   isFormValid = false;
   error1.classList.add('active');
   messageEl.classList.remove('valid');
   messageEl.classList.add('invalid');
   error1.textContent = 'Numbers of input value should be > 5';
}

function validTextMessage(messageEl) {
   isFormValid = true;
   let error1 = messageEl.nextElementSibling;
   error1.classList.remove('active');
   messageEl.classList.remove('invalid');
   error1.textContent = '';
   messageEl.classList.add('valid');
}

function invalidTelNumber(telephone) {
   isFormValid = false;
   let error2 = telephone.nextElementSibling;
   console.log(error2)
   error2.classList.add('active');
   error2.textContent = 'Phone number is invalid'
   telephone.classList.remove('valid');
   telephone.classList.add('invalid');
}

function validTelNumber(telephone) {
   isFormValid = true;
   let error2 = telephone.nextElementSibling;
   error2.classList.remove('active');
   error2.textContent = '';
   telephone.classList.add('valid');
   telephone.classList.remove('invalid');
}

function invalidEmail(emailEl) {
   isFormValid = false;
   let error3 = emailEl.nextElementSibling;
   error3.classList.add('active');
   error3.textContent = 'Email is invalid, please try again'
   emailEl.classList.remove('valid');
   emailEl.classList.add('invalid');
}

function validEmail(emailEl) {
   isFormValid = true;
   let error3 = emailEl.nextElementSibling;
   error3.classList.remove('active');
   error3.textContent = '';
   emailEl.classList.add('valid');
   emailEl.classList.remove('invalid');
}

function invalidNameMessage(nameEl) {
   let error4 = nameEl.nextElementSibling;
   error4.classList.add('active')
   error4.textContent = 'Name is invalid'
   isFormValid = false;
   nameEl.classList.remove('valid');
   nameEl.classList.add('invalid');
}

function validNameMessage(nameEl) {
   isFormValid = true;
   let error4 = nameEl.nextElementSibling;
   error4.classList.remove('active')
   nameEl.classList.add('valid');
   error4.textContent = '';
   nameEl.classList.remove('invalid');
}


//---------------------------Main Event----------------------\\

//main event
formEl.addEventListener('submit', function (event) {
   event.preventDefault();
   console.log(event)
   let isFormValid = false;
   if (!isTextEnought(messageEl)) {
      invalidTextMessage(messageEl)
   } else if (isTextEnought(messageEl)) {
      validTextMessage(messageEl)
   }
   if (!isTelValid(telephone)) {
      invalidTelNumber(telephone)
   } else if (isTelValid(telephone)) {
      validTelNumber(telephone)
   }
   if (!isValidEmail(emailEl)) {
      invalidEmail(emailEl)
   } else if (isValidEmail(emailEl)) {
      validEmail(emailEl)
   }
   if (isNameExist(nameEl)) {
      validNameMessage(nameEl)
   } else if (!isNameExist(nameEl)) {
      invalidNameMessage(nameEl)
   }

   outputValues(isFormValid);
})