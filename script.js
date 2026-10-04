// Wait until the HTML is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // 1. VARIABLES + DOM SELECTION
  const heading = document.querySelector("header h1");
  const projectCards = document.querySelectorAll(".project-card");

  // Works if #contact is either the form itself or a section containing the form
  const contactSection = document.getElementById("contact");
  const contactForm =
    contactSection.tagName === "FORM"
      ? contactSection
      : contactSection.querySelector("form");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const submitButton = contactForm.querySelector("button");

  // Create feedback message
  const formMessage = document.createElement("p");
  formMessage.id = "formMessage";
  contactForm.appendChild(formMessage);

  // 2. CONSOLE.LOG()
  console.log("Portfolio website loaded!");
  console.log("Portfolio heading:", heading.textContent);
  console.log("Number of projects:", projectCards.length);

  // 3. REUSABLE FUNCTION + OPERATORS + CONTROL FLOW
  function checkForm(name, email, message) {
    if (name === "" || email === "" || message === "") {
      return false;
    }

    return true;
  }

  // 4. LOOP + CLICK EVENTS + DOM STYLE CHANGES
  for (let i = 0; i < projectCards.length; i++) {

    projectCards[i].addEventListener("click", function () {

      // Remove highlight from every project card
      for (let j = 0; j < projectCards.length; j++) {
        projectCards[j].style.backgroundColor = "";
      }

      // Highlight clicked project
      projectCards[i].style.backgroundColor = "lightyellow";

      console.log("Project " + (i + 1) + " was clicked.");
    });
  }

  // 5. FORM SUBMIT EVENT
  contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Read form values
    const visitorName = nameInput.value.trim();
    const visitorEmail = emailInput.value.trim();
    const visitorMessage = messageInput.value.trim();

    // 6. IF / ELSE + DOM TEXT CHANGES
    if (checkForm(visitorName, visitorEmail, visitorMessage)) {

      formMessage.textContent =
        "Thank you, " + visitorName + "! Your message has been received.";

      submitButton.textContent = "Message Sent!";

      console.log("Name:", visitorName);
      console.log("Email:", visitorEmail);
      console.log("Message:", visitorMessage);

      // Clear form
      contactForm.reset();

    } else {

      formMessage.textContent =
        "Please complete all fields before sending.";

      submitButton.textContent = "Send";
    }
  });

});