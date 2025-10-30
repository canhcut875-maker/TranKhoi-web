function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Hàm lưu giỏ hàng vào LocalStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Cập nhật số hiển thị trên biểu tượng giỏ hàng
function updateCartCount() {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const countElement = document.getElementById('cart-count');
    if (countElement) countElement.textContent = total;
}

// Khi load trang thì hiển thị lại số lượng giỏ hàng
document.addEventListener('DOMContentLoaded', updateCartCount);