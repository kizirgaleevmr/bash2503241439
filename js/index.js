const modalClose = document.querySelectorAll(".modal__close"),
      modal = document.querySelectorAll(".modal"),
      // mainButton = document.querySelector(".main__button"),
      // modalRequest = document.querySelector(".modalRequest"),
      body = document.querySelector("body"),
      serviceButton = document.querySelectorAll(".service-item__button"),
      projectButton = document.querySelectorAll(".project-item__button");

// mainButton.addEventListener("click", () => {
//   modalRequest.classList.add("modal--active");
//   body.style.overflow = "hidden";
// });

modalClose.forEach((close) => {
  close.addEventListener("click", () => {
    modal.forEach((modal) => {
      modal.classList.remove("modal--active");
      body.style.overflow = "auto";
    })
  })
});

window.addEventListener("click", function(e) {
  modal.forEach((modal) => {
    if(e.target == modal) {
      modal.classList.remove("modal--active");
      body.style.overflow = "auto";
    }
  })
});

serviceButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    modal.forEach((modal) => {
      if (button.getAttribute("data-service") === modal.getAttribute("data-modal-service")) {
        modal.classList.add("modal--active");
        body.style.overflow = "hidden";
      }
    })
  })
});

projectButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    modal.forEach((modal) => {
      if (button.getAttribute("data-project") === modal.getAttribute("data-modal-project")) {
        modal.classList.add("modal--active");
        body.style.overflow = "hidden";
      }
    })
  })
})