// ================= TYPING EFFECT =================

const text = [
  "Web Developer",
  "C Programmer",
  "Python Learner",
  "Frontend Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

  if(count === text.length){
    count = 0;
  }

  currentText = text[count];

  letter = currentText.slice(0, ++index);

  document.querySelector(".typing-text").textContent = letter;

  if(letter.length === currentText.length){
    count++;
    index = 0;
  }

  setTimeout(type, 200);

})();


// ================= DARK MODE =================

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.onclick = function(){

  document.body.classList.toggle("dark-mode");

}


// ================= FORM VALIDATION =================

document.getElementById("contactForm")
.addEventListener("submit", function(e){

  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if(name === "" || email === "" || message === ""){

    alert("Please fill all fields");

  }

  else{

    alert("Form Submitted Successfully");

  }

});


// ================= BACK TO TOP =================

function topFunction(){

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ================= POPUP BOX =================

window.onload = function(){

  setTimeout(function(){

    alert("Welcome To My Portfolio Website");

  }, 1000);

}