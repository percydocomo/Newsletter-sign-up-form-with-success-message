const submitBtn = document.getElementById('submit-button');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('email-error-msg');

const sectionContainer = document.getElementsByClassName('section-container')[0];
const successMsg = document.getElementsByClassName('success-message-container')[0];

const dismissBtn = document.getElementsByClassName('success-button')[0];
const clientEmail = document.getElementsByClassName('emphasis')[0];

function validateEmail(inputValue) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailInput.value.match(emailPattern)) {
        event.preventDefault();
        errorMsg.classList.remove('hidden');
        emailInput.classList.add('error');
    }
    else {
        event.preventDefault();
        errorMsg.classList.add('hidden');
        emailInput.classList.remove('error');
        sectionContainer.style.visibility = 'hidden'; 
        clientEmail.innerHTML = emailInput.value.trim() + '.';
        successMsg.style.visibility = 'visible';
    }
}

function dismiss() {
    successMsg.style.visibility = 'hidden';
    sectionContainer.style.visibility = 'visible';
}

submitBtn.addEventListener('click', validateEmail);
dismissBtn.addEventListener('click', dismiss);