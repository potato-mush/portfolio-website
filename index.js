document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  var dataText = [
    "BS in Information Technology",
    "2nd Year Student",
    "Aspiring Fullstack Web Developer"
  ];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector("#typing").innerHTML =
        text.substring(0, i + 1) +
        '<span class="typing-span" aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 2000);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 5000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  if (!name || !email || !phone || !message) {
    alert("Please fill in all fields before sending the message.");
    return;
  }

  var params = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };

  const serviceID = "service_n366g7k";
  const templateID = "template_eyg7uup";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}

function showContactContainer() {
  document.getElementById("contact-info").style.display = "none";
  document.getElementById("contact").style.justifyContent = "center";
  document.getElementById("contact-container").style.display = "flex"; width = "100%";
}

function showContactInfo() {
  document.getElementById("contact-container").style.display = "none";
  document.getElementById("contact").style.justifyContent = "center";
  document.getElementById("contact-info").style.display = "flex"; width = "100%";
}

var slide_index = 1;
        displaySlides(slide_index);
        function nextSlide(n) {
            displaySlides(slide_index += n);
        }
        function currentSlide(n) {
            displaySlides(slide_index = n);
        }
        function displaySlides(n) {
            var i;
            var slides = document.getElementsByClassName("showSlide");
            if (n > slides.length) { slide_index = 1 }
            if (n < 1) { slide_index = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slide_index - 1].style.display = "block";
        }