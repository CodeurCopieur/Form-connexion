var inputU = document.querySelector('#username'); // input : username
var inputP = document.querySelector('#password'); // input : password

const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

inputU.addEventListener('input', validate); //évènement input : à la saisie on déclanche la function validate
inputP.addEventListener('input', validate); //évènement input : à la saisie on déclanche la function validate

function validate(e) {

  let target = e.target;

    e.target.classList.add('invalid');
    e.target.classList.remove('valid');

  if(target.name == "username") {
    if(target.value.length > 3) {
      e.target.classList.add('valid');
      e.target.classList.remove('invalid'); 

    }
  }

  if(e.target.name == "password") {
    if(!pass_reg.test(e.target.value)){
      e.target.classList.add('invalid');
      e.target.classList.remove('valid');
    }else {
      e.target.classList.add('valid');
      e.target.classList.remove('invalid'); 
    }
  }
  
}