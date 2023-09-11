import { doc } from "prettier";
import "./cards-list.scss";

export default class CardList {

  showCardImg(value) {
    cardsListItemDisable();

    value.classList.add("checked");
  }
}

export function cardsListItemDisable() {
  const cardsListItems = document.querySelectorAll(".cards-list__item");

  for (const cardsListItem of cardsListItems) {
    cardsListItem.classList.remove("checked");
  }
}
