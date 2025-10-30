document.addEventListener('DOMContentLoaded', function () {

    // 1. Đọc chuỗi JSON từ sessionStorage
    const dataString = sessionStorage.getItem('customerOrderData');

    if (dataString) {
        // 2. Chuyển chuỗi JSON ngược lại thành object
        const data = JSON.parse(dataString);

        // 3. Tìm các thẻ span và điền thông tin vào
        const nameElement = document.getElementById('confirm-name');
        const phoneElement = document.getElementById('confirm-phone');
        const addressElement = document.getElementById('confirm-address');

        if (nameElement) {
            nameElement.innerText = data.fullname;
        }

        if (phoneElement) {
            phoneElement.innerText = data.phone;
        }

        if (addressElement) {
            // Ghép nối địa chỉ đầy đủ
            const fullAddress = `${data.address}, ${data.ward}, ${data.district}, ${data.city}`;
            addressElement.innerText = fullAddress;
        }

        // (Không bắt buộc) Xoá dữ liệu khỏi session sau khi đã dùng
        // sessionStorage.removeItem('customerOrderData');

    } else {
        // Xử lý trường hợp người dùng vào thẳng trang confirm mà không qua giỏ hàng
        alert('Không tìm thấy thông tin đơn hàng!');
        // Chuyển về trang chủ
        window.location.href = '/';
    }
});