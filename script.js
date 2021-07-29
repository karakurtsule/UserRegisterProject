var username = document.querySelector('#username');
var email = document.querySelector('#email');
var phone = document.querySelector('#phone');
var password = document.querySelector('#password');
var repassword = document.querySelector('#repassword');
var button = document.querySelector('.btn-primary');
var form = document.querySelector('#form');

function succes(input){
    input.className = 'form-control is-valid';
}

function error(input,message){
    input.className = 'form-control is-invalid';
    var div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

//email regex js 
function validateEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        succes(input);
    }
    else{
        error(input,'gecersiz email')
    }
}

function checkRequied(inputs){
    inputs.forEach(function(input){
        if(input.value === ''){
            error(input,`${input.id} gerekli`);
        }
        else{
            succes(input);
        }
    });
}

function checkLength(input,min,max){
    if(input.value.length<min){
        error(input,`${input.id} en az ${min} karakter olmalıdır`)
    }
    else if(input.value.length>max){
        error(input,`${input.id} en fazla ${max} karakter olmalıdır`)
    }
    else{
        succes(input);
    }
}

function checkPassword(){
    if(password.value === repassword.value){
        //succes(password);
        //succes(repassword);
    }
    else{
        error(repassword,'parolalar eslesmiyor')
    }
}
function checkPhone(){
    var exp = /^\d{10}$/;
    if(!(exp.test(phone.value))){
        error(phone,'gecersiz telefon numarası')
    }
    else{
        succes(phone);
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault()
    checkRequied([username,email,phone,password,repassword]);
    validateEmail(email);
    checkLength(username,4,7);
    checkLength(password,8,12);
    checkLength(repassword,8,12);
    checkPassword();
    checkPhone();
})