function updateSubtotal() {
  const products = document.querySelectorAll('.product');
  let subtotal = 0;

  products.forEach((product) => {
    const quantity = parseInt(product.querySelector('label').textContent);
    const price = parseInt(product.querySelector('.price').textContent.slice(1));
    subtotal += quantity * price;
  });

  document.getElementById('subtotal').textContent = '$' + subtotal;
  updateTotal(subtotal);
}

function updateTotal(subtotal) {
  const discount = parseInt(document.getElementById('discount').textContent.slice(1));
  const total = subtotal - discount;
  document.getElementById('total').textContent = '$' + total;
}

function confirmOrder() {
  alert('¡FELICIDADES! Compra exitosa. ¡GRACIAS POR ELEGIRNOS!');
}

function updateQuantity(button, increment) {
  const label = button.parentNode.querySelector('label');
  let quantity = parseInt(label.textContent);
  
  console.log('Label:', label.textContent);
  console.log('Quantity before:', quantity);

  quantity += increment;

  console.log('Quantity after:', quantity);

  if (quantity >= 0) {
    label.textContent = quantity;
    updateSubtotal();
  }
}

document.querySelectorAll('.minus').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    updateQuantity(button, -1);
    const label = button.parentNode.querySelector('label');
    const product = button.closest('.product');
    const quantity = parseInt(label.textContent);
    const price = parseInt(product.querySelector('.price').textContent.slice(1));
  });
});

document.querySelectorAll('.plus').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    updateQuantity(button, 1);
    const label = button.parentNode.querySelector('label');
    const product = button.closest('.product');
    const quantity = parseInt(label.textContent);
    const price = parseInt(product.querySelector('.price').textContent.slice(1));
  });
});

document.getElementById('applyCoupon').addEventListener('click', () => {
  const couponInput = document.getElementById('coupon');
  const couponCode = couponInput.value.trim();

  if (couponCode === 'BAMULTIPLICA') {
    const subtotal = parseInt(document.getElementById('subtotal').textContent.slice(1));
    const discount = subtotal * 0.1;
    document.getElementById('discount').textContent = '-$' + Math.floor(discount);
    updateTotal(subtotal);
  } else {
    document.getElementById('discount').textContent = '$';
  }

  couponInput.value = '';
});
