const form = document.getElementById('form');

form.addEventListener('submit', e=>{
    e.preventDefault();

    const firstName = form['fname'].value;
    const lastName = form['lname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if(firstName === ''){
        addError('fname','First Name cannot be empty');
    }else{
        removeError('fname')
    }

    if(lastName === ''){
        addError('lname','Last Name cannot be empty');
    }else{
        removeError('lname')
    }

    if(email === ''){
        addError('email','Looks like this is not an email');
    }else if(!isValid(email)){

    }else{
        removeError('email')
    }

    if(password === ''){
        addError('password','Password cannot be empty');
    }else{
        removeError('password')
    }
});

function addError(field, message){
    const formControl = form[field].parentNode;
    formControl.classList.add('error');

    const small = formControl.querySelector('small');
    const inputSelector = formControl.querySelector('input');
    inputSelector.placeholder = "";

    if(field === 'email'){
        inputSelector.placeholder = "email@example.com";
    }
    small.innerText = message;
    small.style.opacity = '1';
}
function removeError(field){
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');

    const small = formControl.querySelector('small');
    small.style.opacity = '0';
}
function isValid(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}