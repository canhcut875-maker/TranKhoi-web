document.addEventListener("DOMContentLoaded", function () {
    const addToCartBtn = document.querySelector(".add-to-cart");

    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", function () {
            const productInfo = document.querySelector(".product-info");
            const id = productInfo.dataset.id;
            const name = productInfo.querySelector(".name").innerText;
            const price = parseFloat(productInfo.dataset.price);

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Kiểm tra xem sản phẩm đã có trong giỏ chưa
            const existing = cart.find(item => item.id === id);
            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));

            // Cập nhật số lượng hiển thị trên icon
            if (typeof updateCartCount === "function") {
                updateCartCount();
            }

            alert("Đã thêm " + name + " vào giỏ hàng!");
        });
    }
});