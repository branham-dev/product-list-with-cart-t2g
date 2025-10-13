import {
	incrementQuantity,
	decrementQuantity,
	dessertsContainer,
	renderAllDesserts,
	updateDessertCard,
	updateDessertList,
	calculateCartQuantity,
	calculateCartTotal,
	checkCartState,
} from "./logic.js";

document.addEventListener("DOMContentLoaded", (): void => {
	renderAllDesserts();

	dessertsContainer.addEventListener("click", (e: Event) => {
		const target = e.target as HTMLElement;

		const addButton = target.closest('[data-cart="add-to"]') as HTMLElement | null;
		const incrementButton = target.closest('[data-cart="increment"]') as HTMLElement | null;
		const decrementButton = target.closest('[data-cart="decrement"]') as HTMLElement | null;

		const card = target.closest(".product-card") as HTMLElement | null;
		if (!card) return;

		const cardId: string | undefined = card?.dataset.id;
		if (!cardId) return;

		if (addButton) {
			incrementQuantity(cardId);
		} else if (incrementButton) {
			incrementQuantity(cardId);
		} else if (decrementButton) {
			decrementQuantity(cardId);
		} else {
			return;
		}

		updateDessertCard(cardId);
		updateDessertList(cardId);
		calculateCartQuantity();
		checkCartState();
		calculateCartTotal();
	});

	calculateCartQuantity();
	checkCartState();
});
