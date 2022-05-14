const inputs = Array.from(document.querySelectorAll('input'));
const containers = Array.from(document.querySelectorAll('.container'));
const button = document.querySelector('button');
const warningGeneral = document.createElement('p');
const warningPassword = document.createElement('p');

warningGeneral.innerText = '*Required field';
warningPassword.innerText = '*Passwords do not match';

warningGeneral.classList.add('warning');
warningPassword.classList.add('warning');
warningPassword.id = 'pass';

let password = '';
let confirmPass = '';

for (input of inputs) {
    input.addEventListener('focusin', (e) => {
        e.target.style.boxShadow = '0px 2px 4px blue';
    });
    input.addEventListener('change', (e) => {
        if (e.target.previousElementSibling.innerText.toLowerCase() == 'password') {
            password = e.target.value;
        } else if (e.target.previousElementSibling.innerText.toLowerCase() == 'confirm password') {
            confirmPass = e.target.value;
        }
    })
    input.addEventListener('focusout', (e) => {
        e.target.style.boxShadow = '';
        // IF EMPTY
        if (!e.target.value && e.target.required) {
            e.target.style.boxShadow = '0px 2px 4px red';
            if (e.target.previousElementSibling.innerText.toLowerCase() == 'password') {
                e.target.parentElement.append(warningPassword);
            } else if (e.target.previousElementSibling.innerText.toLowerCase() == 'confirm password') {
                e.target.parentElement.append(warningPassword);
            } else {
                e.target.parentElement.append(warningGeneral);
            }
        } else if (password != confirmPass) {
            e.target.parentElement.append(warningPassword);
        } else if (password == confirmPass) {
            removePassWarnings();
        } else {
            removeWarnings();
        }
    });
}

button.addEventListener('click', (e) => {
    //  change color
    console.log('click');
})

const removePassWarnings = function () {
    for (container of containers) {
        if (container.lastChild.id == 'pass') {
            container.lastChild.remove();
        }
    }
}

const removeWarnings = function () {
    for (container of containers) {
        container.lastChild.remove();
    }
}