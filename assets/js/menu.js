/* -------------------- GET ELEMENTS --------------------*/

const buttonExitMenuMobile = document.querySelector(".exit_button");
const menuMobile = document.querySelector(".menu_mobile");
const menuMobileContainer = document.querySelector(".menu_mobile_container");
const menuMobileModalFilter = document.querySelector(
  ".menu_mobile_modal_filter"
);
const menuMobileModal = document.querySelector(".menu_mobile_modal");

/* -------------------- LISTENERS GET ELEMENTS -------------------- */

buttonExitMenuMobile.addEventListener("click", () => {
  toggleMenuMobile();
});

menuMobile.addEventListener("click", () => {
  toggleMenuMobile();
});
menuMobileModalFilter.addEventListener("click", () => {
  toggleMenuMobile();
});

/* -------------------- FUNCTIONS EXPORT -------------------- */

const toggleMenuMobile = () => {
  menuMobileContainer.classList.toggle("menu_mobile_opened");
  menuMobileModalFilter.classList.toggle("menu_mobile_opened");
  menuMobileModal.classList.toggle("menu_mobile_opened");
  menuMobileModal.classList.toggle("menu_mobile_opened_menu_mobile_modal");
};
