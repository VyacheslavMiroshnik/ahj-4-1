import ValidationForm from "../components/validation-form/validation-form";
import CardList from "../components/cards-list/cards-list";

document.addEventListener("DOMContentLoaded", () => {
  const validationForm = new ValidationForm(
    document.querySelector(".validation-form")
  );

  const button = document.querySelector(".validation-form__btn");
  button.addEventListener("click", (e) => {
    e.preventDefault();

    validationForm.checkValid();

    validationForm.checkType();
  });
});
