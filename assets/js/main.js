/* Constantes */

const PRODUCT_PRICE = 19990;
const userQuantity = document.getElementById('quantity');
const userColor = document.getElementById('color');
const calTotal = document.getElementById('btn-total');
const total = document.getElementById('total');
const finalQuantity = document.getElementById('qty-final');
const finalColor = document.getElementById('user-color');

/* Formato precio CLP */

total.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "CLP" }).format(PRODUCT_PRICE);



function calculator(event) {
  event.preventDefault();
  let totalCalculator = (userQuantity.value) * PRODUCT_PRICE;
  total.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "CLP" }).format(totalCalculator);
  finalQuantity.innerHTML = userQuantity.value;
  finalColor.style.backgroundColor = userColor.value;
}

