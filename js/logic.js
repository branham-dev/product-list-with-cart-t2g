import { createDessert, createCart, renderCartTotal } from "./createElements.js";
import { loadDesserts } from "./fetchData.js";
export const dessertsContainer = document.querySelector("#desserts-container");
const cartList = document.querySelector("#cart-list");
const cartQuantity = document.querySelector("#cart-quantity");
const cartRender = document.querySelector("#cart-render");
const emptyCart = document.querySelector("#empty-cart");
export let desserts = [];
export const incrementQuantity = (dessertId) => {
    desserts = desserts.map((dessert) => dessert.id === dessertId && dessert.quantity < 10
        ? { ...dessert, quantity: dessert.quantity + 1 }
        : dessert);
};
export const decrementQuantity = (dessertId) => {
    desserts = desserts.map((dessert) => dessert.id === dessertId && dessert.quantity > 0
        ? { ...dessert, quantity: dessert.quantity - 1 }
        : dessert);
};
export const updateDessertCard = (dessertId) => {
    const dessert = desserts.find((d) => d.id === dessertId);
    if (!dessert)
        return;
    const oldCard = dessertsContainer.querySelector(`[data-id="${dessertId}"]`);
    if (!oldCard)
        return;
    const newCard = createDessert(dessert);
    dessertsContainer.replaceChild(newCard, oldCard);
};
export const renderAllDesserts = async () => {
    try {
        desserts = await loadDesserts();
        desserts.forEach((d) => dessertsContainer.appendChild(createDessert(d)));
    }
    catch (error) { }
};
export const updateDessertList = (dessertId) => {
    const dessert = desserts.find((d) => d.id === dessertId);
    if (!dessert)
        return;
    let existingItem = cartList.querySelector(`[data-id="${dessertId}"]`);
    if (dessert.quantity === 0 && existingItem) {
        cartList.removeChild(existingItem);
        return;
    }
    if (existingItem) {
        const updated = createCart(dessert);
        cartList.replaceChild(updated, existingItem);
        return;
    }
    if (dessert.quantity > 0) {
        cartList.appendChild(createCart(dessert));
    }
};
export const calculateCartQuantity = () => {
    const updatedList = desserts.filter((d) => d.quantity > 0);
    const quantity = updatedList.length;
    cartQuantity.textContent = `Your Cart (${quantity})`;
};
export const calculateCartTotal = () => {
    const cartTotal = document.querySelector("#cart-total");
    if (!cartTotal) {
        emptyCart.classList.remove("hidden");
        return;
    }
    emptyCart.classList.add("hidden");
    const total = desserts.reduce((sum, d) => sum + d.price * d.quantity, 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
};
export const checkCartState = () => {
    cartRender.innerHTML = "";
    const itemList = desserts.filter((d) => d.quantity > 0);
    if (itemList.length < 1) {
        return;
    }
    cartRender.innerHTML = renderCartTotal();
};
//# sourceMappingURL=logic.js.map