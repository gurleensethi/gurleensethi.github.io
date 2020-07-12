window.onload = () => {
  const contactMeBtn = document.getElementById("contact-me-btn");
  const contactSection = document.getElementById("contact");

  contactMeBtn.addEventListener("click", function (event) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  });

  [
    { dialogId: "details-dialog-concordia", btnId: "view-details-concordia" },
  ].forEach(({ btnId, dialogId }) => setUpDetailsDialog(btnId, dialogId));
};

function setUpDetailsDialog(viewDetailsBtnId, dialogId) {
  const viewDetailsBtn = document.getElementById(viewDetailsBtnId);
  const dialog = document.getElementById(dialogId);
  const dialogContent = dialog.getElementsByClassName("dialog-content")[0];
  const closeBtn = dialog.getElementsByClassName("close-btn")[0];

  function openDialog() {
    dialog.classList.add("show-dialog");
  }

  function closeDialog() {
    dialogContent.classList.add("hide-dialog");
    setTimeout(() => {
      dialogContent.classList.remove("hide-dialog");
      dialog.classList.remove("show-dialog");
    }, 500);
  }

  viewDetailsBtn.addEventListener("click", openDialog);
  dialogContent.addEventListener("click", (e) => e.stopPropagation());
  dialog.addEventListener("click", closeDialog);
  closeBtn.addEventListener("click", closeDialog);
}

function hideDialog(e) {
  const element = document.getElementById("");
  element.classList.remove("show-dialog");
}
