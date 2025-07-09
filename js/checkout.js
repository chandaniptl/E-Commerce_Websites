const checkoutCart = document.getElementById('checkoutCart');
const checkoutTotal = document.getElementById('checkoutTotal');
const checkoutForm = document.getElementById('checkoutForm');

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let isSubmitting = false;

function renderCheckoutCart() {
  checkoutCart.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    checkoutCart.innerHTML = '<li class="list-group-item text-danger fw-bold">Your cart is empty.</li>';

    if (checkoutForm) {
      checkoutForm.querySelector('button[type="submit"]').disabled = true;
    }
    return;
  }

  if (checkoutForm) {
    checkoutForm.querySelector('button[type="submit"]').disabled = false;
  }

  cart.forEach((item, index) => {
    const unitPrice = parseFloat(item.price.toString().replace(/[^0-9.]/g, ''));
    const itemTotal = unitPrice * item.quantity;
    total += itemTotal;

    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

    li.innerHTML = `
      <div>
        <strong class="text-black fs-5">${item.name}</strong><br>
        <small class="text-muted">Qty: ${item.quantity} × $${unitPrice.toFixed(2)}</small>
      </div>
      <div>
        <span class="text-muted fw-bold me-3">$${itemTotal.toFixed(2)}</span>
        <button class="btn btn-sm btn-danger remove-item" data-index="${index}">Delete</button>
      </div>
    `;

    checkoutCart.appendChild(li);
  });

  checkoutTotal.textContent = `$${total.toFixed(2)}`;

  const removeButtons = checkoutCart.querySelectorAll('.remove-item');
  removeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const index = parseInt(e.target.getAttribute('data-index'));
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCheckoutCart();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (!checkoutForm) return;

  checkoutForm.addEventListener('submit', (e) => {
    if (isSubmitting) {
      e.preventDefault();
      return;
    }

    if (!checkoutForm.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      checkoutForm.classList.add('was-validated');
      return;
    }

    if (cart.length === 0) {
      e.preventDefault();
      alert("🛒 Your cart is empty. Please add items before placing an order.");
      return;
    }

    isSubmitting = true;
    e.preventDefault();

    alert("Order placed successfully!");

    localStorage.removeItem('cart');
    cart = [];
    renderCheckoutCart();

    checkoutForm.reset();
    checkoutForm.classList.remove('was-validated');

    checkoutForm.querySelectorAll('input, textarea, select').forEach(field => {
      field.value = '';
      field.checked = false;
    });

    checkoutForm.querySelector('button[type="submit"]').disabled = true;

    setTimeout(() => {
      window.location.href = 'index.html';
    }, 100);
  });

  renderCheckoutCart();
});

