const scriptURL = 'https://script.google.com/macros/s/AKfycbxckNl78XeC6-sBqwnv82I7SGJGPAwnGTgbMwJNA9TVxVpn7OCE98B4SwQ9sTPam7ryQw/exec'
const form = document.forms['submit-to-google-sheet']
const formMessage = document.querySelector('#formMessage')
const portfolioLink = document.querySelector('#portfolio-link');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        formMessage.textContent = 'Message sent successfully';
        setTimeout(function() {
            formMessage.textContent = '';
            let a = document.createElement('a');
            a.href = 'https://www.pixelthoughts.co/';
            a.alt="Git Hub";
            a.textContent = 'click here';
            a.style.marginTop = '10px'
            portfolioLink.append(a);
        },3000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
    
})


// Function to show a funny message based on the selected value
function showFunnyMessage() {
  const knowMeSelect = document.getElementById('knowMe');
  const selectedValue = knowMeSelect.value;

  let message = "";
  switch (selectedValue) {
      case "Yes, of course! 😎":
          message = "Awesome! 😎 I'm glad you know me!";
          break;
      case "Maybe, but who are you again? 🤷‍♂️":
          message = "Haha! 🤷‍♂️ Well, let's get acquainted!";
          break;
      case "Not sure, but I like your style! 😄":
          message = "Thanks! 😄 Let's keep it stylish!";
          break;
      case "Nope, but I'm getting to know you! 👋":
          message = "Great to meet you! 👋 Let's get to know each other!";
          break;
      default:
          message = "Surprise! 😃";
  }

  alert(message);
}

window.onload = function() {
  alert("🚀 Complete the form to unlock a surprise! 😎");
};