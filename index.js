// Discount Form
  document.addEventListener("DOMContentLoaded", function () {
      let form = document.getElementById("discountForm");

      if (form) {
          form.addEventListener("submit", function(event) {
              event.preventDefault(); // Prevent actual form submission
              
              let name = document.getElementById("name").value;
              let email = document.getElementById("email").value;
              let message = document.getElementById("formMessage");

              if (name && email) {
                  message.style.display = "block";
                  message.style.color = "#ffcc00";
                  message.innerText = "Thank you, " + name + "! Your discount has been applied. Check your email for details.";
                  form.reset();
              } else {
                  message.style.display = "block";
                  message.style.color = "red";
                  message.innerText = "Please fill out all fields correctly.";
              }
          });
      } else {
          console.error("⚠️ Form with ID 'discountForm' not found!");
      }
  });
//   Discount Form end


// Custom JS for Online Class Help Page

document.addEventListener("DOMContentLoaded", function () {
    console.log("Script is working!");
    const ctaBtn = document.querySelector(".cta-button");
    if (ctaBtn) {
      ctaBtn.addEventListener("click", () => {
        alert("Your discount is on the way! 🎉 Our team will contact you shortly.");
      });
    }
  });

  //////////////



// Countdown Timer function
function startCountdown() {
  let time = 120; // 2 minutes
  let countdownElement = document.getElementById("countdown");

  let timer = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownElement.textContent = `${minutes}:${seconds}`;
    time--;

    if (time < 0) {
      clearInterval(timer);
      countdownElement.textContent = "0:00";
    }
  }, 1000);
}

// Show popup after delay
window.onload = function () {
  setTimeout(() => {
    const popup = document.getElementById("popup");
    popup.style.display = "flex";
    startCountdown();
  }, 2000);
};

// Close the popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Handle form submission and store in localStorage
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("lead-form");
  const successMsg = document.getElementById("success-msg");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent reload

    const inputs = form.querySelectorAll("input");
    const formData = {};

    inputs.forEach((input) => {
      formData[input.name] = input.value;
    });

    localStorage.setItem("leadFormData", JSON.stringify(formData));

    successMsg.style.display = "block";
    form.reset();
  });
});




  
  
