window.onload = function () {

    // Lấy danh sách đơn hàng đã lưu trong localStorage
    let history = JSON.parse(localStorage.getItem("orderHistory")) || [];

    let tbody = document.getElementById("orderBody");
    let noOrder = document.getElementById("noOrder");

    // Nếu không có đơn hàng → hiện thông báo
    if (history.length === 0) {
        noOrder.classList.remove("hidden");
        return;
    }

    // Nếu có đơn hàng → hiển thị bảng
    history.forEach(order => {

        // Danh sách sản phẩm
        let productList = order.items
            .map(item => `${item.name} (x${item.qty})`)
            .join("<br>");

        // Trạng thái (cố định mẫu, có thể đổi sau)
        let statusClass = order.status === "success" ? "success" : "pending";
        let statusText = order.status === "success" ? "Thành công" : "Đang xử lý";

        tbody.innerHTML += `
            <tr>
                <td>${order.id}</td>
                <td>${order.date}</td>
                <td>${productList}</td>
                <td>${order.total.toLocaleString()} VND</td>
                <td class="status ${statusClass}">${statusText}</td>
            </tr>
        `;
    });
};
