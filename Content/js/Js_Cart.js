document.addEventListener("DOMContentLoaded", () => {
    renderCart();

    // Nút xóa toàn bộ
    document.getElementById("clear-cart").addEventListener("click", () => {
        if (confirm("Bạn có chắc muốn xóa toàn bộ giỏ hàng không?")) {
            localStorage.removeItem("cart");
            renderCart();
            window.dispatchEvent(new Event("storage"));
        }
    });

    // Nút thanh toán
    document.getElementById("checkout").addEventListener("click", () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length === 0) {
            alert("Giỏ hàng trống, không thể thanh toán!");
            return;
        }

    });
});

function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const tbody = document.querySelector("#cart-table tbody");
    const totalElement = document.getElementById("cart-total");

    if (cart.length === 0) {
        tbody.innerHTML = "<tr><td colspan='6' class='empty'>Giỏ hàng trống.</td></tr>";
        totalElement.textContent = "0₫";
        return;
    }

    let total = 0;
    tbody.innerHTML = cart.map(p => {
        const itemTotal = p.price * p.quantity;
        total += itemTotal;
        return `
        <tr>
            <td><img src="${p.img}" class="cart-img"></td>
            <td>${p.name}</td>
            <td>${p.price.toLocaleString()}₫</td>
            <td>
                <button class="qty-btn" onclick="changeQuantity('${p.id}', -1)">−</button>
                <span class="qty">${p.quantity}</span>
                <button class="qty-btn" onclick="changeQuantity('${p.id}', 1)">+</button>
            </td>
            <td>${itemTotal.toLocaleString()}₫</td>
            <td><button class="btn-remove" onclick="removeItem('${p.id}')">Xóa</button></td>
        </tr>`;
    }).join("");

    totalElement.textContent = total.toLocaleString() + "₫";
}

function changeQuantity(id, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(p => p.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) item.quantity = 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
        window.dispatchEvent(new Event("storage"));
    }
}

function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(p => p.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    window.dispatchEvent(new Event("storage"));
}