// About Me text
const aboutText = "I am a passionate web developer who loves creating simple and effective web applications using HTML, CSS, and JavaScript.";
document.getElementById("about-text").textContent = aboutText;

// Show email on button click
const contactBtn = document.getElementById("contact-btn");
const email = document.getElementById("email");

contactBtn.addEventListener("click", () => {
    email.style.display = email.style.display === "none" ? "block" : "none";
});
