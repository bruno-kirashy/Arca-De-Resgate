const buttonPremium = document.querySelectorAll(".button_article");
const closeIconModalPremium = document.querySelector(".button_close_modal");
const modalPremiumContent = document.querySelector(".modal_premium_section");

buttonPremium.forEach((button) => {
  button.addEventListener("click", () => {
    modalPremiumContent.classList.add("active");
  });
});

closeIconModalPremium.addEventListener("click", () => {
  modalPremiumContent.classList.remove("active");
});
