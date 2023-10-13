// ----------- hamburger menu --------------

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});


var hamburger = document.getElementById('hamburger');
if(hamburger.checked){
    alert("check!");
}

// ---------------- registration form ---------------

function validateform(){
    // alert('success click')
    // var fullName = document.getElementById('name');
    // var address = document.getElementById('address');
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('con-pass').value;
    var agreement = document.getElementById('term-con');

    if(password.length < 6){
        alert('Password must be at least 6 character!');
    } else if(confirm.length > 0 && confirm != password){
        alert('Password are not same!');
    } else if(!agreement.checked){
        alert('Term & Condition must be checked!');
    } else{
        alert('Succcesfully register');
    }
}