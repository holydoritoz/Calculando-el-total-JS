/* Variables */
let userQuantity = document.getElementById('quantity');
let userColor = document.getElementById('color');

/* Constantes */
const PRODUCT_PRICE = 19990;
const FINAL_PRICE = document.getElementById('total');
const FINAL_QUANTITY = document.getElementById('qty-final');
const FINAL_COLOR = document.getElementById('user-color');

/* Formato precio CLP */
FINAL_PRICE.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "CLP" }).format(PRODUCT_PRICE);

/* Funcion para totalizar */
const calculator = (event) => {
  event.preventDefault();
  let totalCalculator = userQuantity.value * PRODUCT_PRICE;
  FINAL_PRICE.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "CLP" }).format(totalCalculator);
  FINAL_QUANTITY.innerHTML = userQuantity.value;
  FINAL_COLOR.style.backgroundColor = userColor.value;
};


