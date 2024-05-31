/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// -----------------Readmore-less Button project Section------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more");
    readMoreButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const additionalContent = this.nextElementSibling;
            if (additionalContent.style.display === "none" || additionalContent.style.display === "") {
                additionalContent.style.display = "block";
                this.innerText = "Read less";
            } else {
                additionalContent.style.display = "none";
                this.innerText = "Read more...";
                this.style.textDecoration = "underline"; // Add underline

            }
        });
    });
});
// -----------------Readmore-less Button project Section ends------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");
  const thankYouPopup = document.getElementById("thankYouPopup");
  const closePopupButton = document.getElementById("closePopup");
  const body = document.querySelector('body');

  contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      // Assuming all fields are filled out
      showThankYouPopup();
      disableScroll(); // Call function to disable scrolling
  });

  function showThankYouPopup() {
      thankYouPopup.style.display = "block";
  }

  closePopupButton.addEventListener("click", function() {
      thankYouPopup.style.display = "none";
      enableScroll(); // Call function to enable scrolling
  });

  function disableScroll() {
      body.style.overflow = 'hidden';
  }

  function enableScroll() {
      body.style.overflow = 'auto';
  }
});


// -----------------------------------
document.getElementById("hireButton").addEventListener("click", function() {
    document.getElementById("hireModal").style.display = "block";
  });
  
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("hireModal").style.display = "none";
  });
  
  window.onclick = function(event) {
    if (event.target == document.getElementById("hireModal")) {
      document.getElementById("hireModal").style.display = "none";
    }
  };

  

//   ==================================================================
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function showSlide(index) {
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  }
  images.forEach((img, i) => {
    if (i === currentIndex) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

showSlide(currentIndex);
// ----------------------------------------------------------









  