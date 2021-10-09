const formBtn1 = document.querySelector('#btn-1');
const formBtnPrev2 = document.querySelector('#btn-2-prev');
const formBtnNext2 = document.querySelector('#btn-2-next');
const formBtnPrev3 = document.querySelector('#btn-3-prev');
const formBtnNext3 = document.querySelector('#btn-3-next');
const formBtnPrev4 = document.querySelector('#btn-4-prev');
const signUpBtn=document.querySelector('#addauthbtn');

// Button listener of form 1
formBtn1.addEventListener('click', function(e) {
  e.preventDefault();
  ifEmpty(AuthorName);
  console.log('button1 clicked');
  if(errorFlags.AuthorNameErrFlag===false ){
    gotoNextForm(formBtn1,formBtnNext2, 1, 2);
    
  }
  
});

// Next button listener of form 2
formBtnNext2.addEventListener('click', function(e) {
  e.preventDefault();
  ifEmpty(authorpic);
  if(errorFlags.authorpicErrFlag===false){
    gotoNextForm(formBtnNext2, formBtnNext3, 2, 3);
   
  }
  
});

// Previous button listener of form 2
formBtnPrev2.addEventListener('click', function(e) {
  gotoNextForm(formBtnNext2, formBtn1, 2, 1);
  e.preventDefault();
});
// Previous button listener of form 3
formBtnPrev3.addEventListener('click', function(e) {
  gotoNextForm(formBtnNext3, formBtnNext2, 3, 2);
  e.preventDefault();
});
// Next button listener of form 3
formBtnNext3.addEventListener('click', function(e) {
  e.preventDefault();
  ifEmpty(works);
  if(errorFlags.worksErrFlag===false ){
    gotoNextForm(formBtnNext3, signUpBtn, 3, 4);
    
  }
  
});
// Previous button listener of form 4
formBtnPrev4.addEventListener('click', function(e) {
  gotoNextForm(formBtnNext4, formBtnNext3, 4, 3);
  e.preventDefault();
});
//signUp Button listener of form 5
signUpBtn.addEventListener('click', function(e) {
  e.preventDefault();
  ifEmpty(about);
  if(errorFlags.aboutErrFlag===false){
    document.querySelector(`.step--4`).classList.remove('step-active');
    document.querySelector(`.step--5`).classList.add('step-active');
    signUpBtn.parentElement.style.display = 'none';
    document.querySelector('.form--message').innerHTML = `
    <h1 class="form--message-text">New Author is Added Successfully  </h1>
    `;
    setTimeout(()=>{
      get('#addNewAuthorForm').submit();
    },2000);
  }
  
  
});

const gotoNextForm = (prev, next, stepPrev, stepNext) => {
  // Get form through the button
  const prevForm = prev.parentElement;
  const nextForm = next.parentElement;
  const nextStep = document.querySelector(`.step--${stepNext}`);
  const prevStep = document.querySelector(`.step--${stepPrev}`);
  // Add active/inactive classes to both previous and next form
  nextForm.classList.add('form-active');
  nextForm.classList.add('form-active-animate');
  prevForm.classList.add('form-inactive');
  // Change the active step element
  prevStep.classList.remove('step-active');
  nextStep.classList.add('step-active');
  // Remove active/inactive classes to both previous an next form
  setTimeout(() => {
    prevForm.classList.remove('form-active');
    prevForm.classList.remove('form-inactive');
    nextForm.classList.remove('form-active-animate');
  }, 1000);
};
