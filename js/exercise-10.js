// const form = document.querySelector('.js-register-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();

//     // const formElements = event.currentTarget.elements;
//     // console.dir(formElements);

//     // const mail = formElements.email.value;
//     // const password = formElements.password.value;
   
//     // console.log(mail, password)

//     const formData = new FormData(event.currentTarget)

//     console.log(formData);

//     formData.forEach((value, name) => {
//         console.log('onFormSubmit -> name', name);
//         console.log('onFormSubmit -> value', value)
//     })
// }

const refs = {
    input: document.querySelector('.js-input'),
    nameLabel:document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange)
// refs.input.addEventListener('input', onInputChange);

refs.input.addEventListener('input', onInputChange)
refs.licenseCheckbox.addEventListener('change', onLicenseChange)

function onInputFocus() {
    console.log('Інпут отримав фокус = подія focus');
}

function onInputBlur() {
    console.log('Інпут отримав фокус = подія blur');
}

function onInputChange(event) {
    refs.nameLabel.textContent = event.currentTarget.value
}

function onLicenseChange() {
    refs.btn.disabled = !event.currentTarget.checked;
}


window.addEventListener('keydown', onKeypress);
refs.clearBtn.addEventListener('click', onClearOutput)

function onKeypress(event) {
    refs.output.textContent += event.key;
}

function onClearOutput() {
    refs.output.textContent = '';
}