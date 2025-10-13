import type { Raw, Dessert } from "./interfaces";

export const createDessert = (dessert: Dessert): HTMLElement => {
	const card = document.createElement("article") as HTMLElement;
	card.classList.add("product-card");
	card.dataset.id = dessert.id;

	card.innerHTML = /*html*/ `
  <div class="card-container--top">
    <figure class="card__figure">
      <picture>
        <source media="(min-width: 1024px)" srcset="${dessert.image.desktop}" />
        <source media="(min-width: 768px)" srcset="${dessert.image.tablet}" />
        <img src="${dessert.image.mobile}" alt="${dessert.name}" />
      </picture>
    </figure>
${
	dessert.quantity < 1
		? /*html*/ `
    <button class="card__button" data-cart="add-to">
      <img src="./assets/images/icon-add-to-cart.svg" alt="Cart" />
      <span class="block">Add to Cart</span>
    </button>
    `
		: /*html*/ `
    <div class="card__button card__button--qty">
      <button class="decrement" data-cart="decrement">
        <img src="./assets/images/icon-decrement-quantity.svg" alt="Decrement" />
      </button>
      <span class="quantity">${dessert.quantity}</span>
      <button class="increment" data-cart="increment">
        <img src="./assets/images/icon-increment-quantity.svg" alt="Increment" />
      </button>
    </div>
    `
}
  </div>
  <div class="card__container">
    <h2 class="card__title">${dessert.name}</h2>
    <p class="card__description">${dessert.category}</p>
    <p class="card__price">$${dessert.price.toFixed(2)}</p>
  </div>
    `;

	return card;
};

export const createCart = (dessert: Dessert): HTMLElement => {
	const cartItem = document.createElement("li");
	cartItem.classList.add("cart__item");
	cartItem.dataset.id = dessert.id;

	cartItem.innerHTML = /*html*/ `
    <div class="cart__info">
			<span class="cart__name">${dessert.name}</span>
			<div class="cart__details">
				<span class="cart__qty">${dessert.quantity}x</span>
				<div class="cart__align">
					<span class="cart__unit">@${dessert.price.toFixed(2)}</span>
					<span class="cart__total">$${dessert.price * dessert.quantity}</span>
				</div>
			</div>
		</div>
		<figure>
			<img src="./assets/images/icon-remove-item.svg" alt="remove svg" />
		</figure>
  `;

	return cartItem;
};

export const renderCartTotal = (): string => {
	const component: string = /*html*/ `
  <div class="cart__total-items">
								<span class="cart__total-text">Order Total</span>
								<span class="cart__total-price" id="cart-total"></span>
							</div>
							<div class="cart__delivery">
								<img src="./assets/images/icon-carbon-neutral.svg" alt="carbon illustration" />
								<p>This is a <b>carbon-neutral</b> delivery</p>
							</div>
							<button class="cart__button">Confirm Order</button>`;

	return component;
};
