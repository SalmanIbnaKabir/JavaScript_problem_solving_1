// Molar dam
// For first 2 kg - 30 tk per kg
// For more than 2 kg - 25 tk per kg
// write a function to calculate total price based on given quantity. + handle errors



function totalPrice(quantity) {

  if (quantity <= 2) {
    return quantity * 30;
  } else {
    return quantity * 25;
  }

}

const total = totalPrice(5);
console.log('molar dam', total)