window.onload = () => {
  const contactMeBtn = document.getElementById("contact-me-btn");
  const contactSection = document.getElementById("contact");

  contactMeBtn.addEventListener("click", function (event) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
};
