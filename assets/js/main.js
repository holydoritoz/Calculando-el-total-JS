/* Variables */

let userQuantity = document.getElementById('quantity');
let userColor = document.getElementById('color');

/* Constantes */
const PRODUCT_PRICE = 19990;
const totalPrice = document.getElementById('total');
const finalQuantity = document.getElementById('qty-final');
const finalColor = document.getElementById('user-color');

/* Formato precio CLP */

totalPrice.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "CLP" }).format(PRODUCT_PRICE);

/* Funcion para totalizar */

const calculator = (event) => {
  event.preventDefault();
  let totalCalculator = userQuantity.value * PRODUCT_PRICE;
  totalPrice.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "CLP" }).format(totalCalculator);
  finalQuantity.innerHTML = userQuantity.value;
  finalColor.style.backgroundColor = userColor.value;
};


