import { incrementQuantity, decrementQuantity, dessertsContainer, renderAllDesserts, updateDessertCard, updateDessertList, calculateCartQuantity, calculateCartTotal, checkCartState, } from "./logic.js";
document.addEventListener("DOMContentLoaded", () => {
    renderAllDesserts();
    dessertsContainer.addEventListener("click", (e) => {
        const target = e.target;
        const addButton = target.closest('[data-cart="add-to"]');
        const incrementButton = target.closest('[data-cart="increment"]');
        const decrementButton = target.closest('[data-cart="decrement"]');
        const card = target.closest(".product-card");
        if (!card)
            return;
        const cardId = card?.dataset.id;
        if (!cardId)
            return;
        if (addButton) {
            incrementQuantity(cardId);
        }
        else if (incrementButton) {
            incrementQuantity(cardId);
        }
        else if (decrementButton) {
            decrementQuantity(cardId);
        }
        else {
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
//# sourceMappingURL=index.js.map