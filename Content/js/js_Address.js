document.addEventListener('DOMContentLoaded', function () {


    const addressData = {
        "TP Hà Nội": { "Quận Ba Đình": ["Phường Cống Vị", "Phường Liễu Giai"], "Quận Hoàn Kiếm": ["Phường Hàng Bạc", "Phường Hàng Trống"] },
        "TP Hồ Chí Minh": { "Quận 1": ["Phường Bến Nghé", "Phường Đa Kao"], "Quận 3": ["Phường 1", "Phường 2"] },
        "TP Đà Nẵng": { "Quận Hải Châu": ["Phường Bình Hiên", "Phường Nam Dương"], "Quận Sơn Trà": ["Phường An Hải Bắc", "Phường Thọ Quang"] },
        "An Giang": { "Thành phố Long Xuyên": ["Phường Mỹ Bình", "Phường Mỹ Long"], "Thành phố Châu Đốc": ["Phường Châu Phú A", "Phường Châu Phú B"] },
        "Bắc Ninh": { "Thành phố Bắc Ninh": ["Phường Đáp Cầu", "Phường Kinh Bắc"], "Thành phố Từ Sơn": ["Phường Đồng Kỵ", "Phường Trang Hạ"] },
        "Cà Mau": { "Thành phố Cà Mau": ["Phường 1", "Phường 2", "Phường 4"] },
        "Cao Bằng": { "Thành phố Cao Bằng": ["Phường Hợp Giang", "Phường Sông Bằng"] },
        "TP Cần Thơ": { "Quận Ninh Kiều": ["Phường An Cư", "Phường An Bình"], "Quận Bình Thuỷ": ["Phường An Thới", "Phường Bùi Hữu Nghĩa"] },
        "Đắk Lắk": { "Thành phố Buôn Ma Thuột": ["Phường Tân Lợi", "Phường Thắng Lợi"] },
        "Điện Biên": { "Thành phố Điện Biên Phủ": ["Phường Mường Thanh", "Phường Tân Thanh"] },
        "Đồng Nai": { "Thành phố Biên Hòa": ["Phường An Bình", "Phường Bửu Long"] },
        "Đồng Tháp": { "Thành phố Cao Lãnh": ["Phường 1", "Phường 2"] },
        "Gia Lai": { "Thành phố Pleiku": ["Phường Diên Hồng", "Phường Ia Kring"] },
        "Hà Tĩnh": { "Thành phố Hà Tĩnh": ["Phường Bắc Hà", "Phường Nam Hà"] },
        "TP Hải Phòng": { "Quận Hồng Bàng": ["Phường Hạ Lý", "Phường Thượng Lý"], "Quận Ngô Quyền": ["Phường Cầu Đất", "Phường Máy Tơ"] },
        "TP Huế": { "Thành phố Huế": ["Phường An Cựu", "Phường An Đông"] },
        "Hưng Yên": { "Thành phố Hưng Yên": ["Phường An Tảo", "Phường Hiến Nam"] },
        "Khánh Hòa": { "Thành phố Nha Trang": ["Phường Lộc Thọ", "Phường Vĩnh Hải"] },
        "Lai Châu": { "Thành phố Lai Châu": ["Phường Đông Phong", "Phường Tân Phong"] },
        "Lạng Sơn": { "Thành phố Lạng Sơn": ["Phường Chi Lăng", "Phường Đông Kinh"] },
        "Lào Cai": { "Thành phố Lào Cai": ["Phường Cốc Lếu", "Phường Duyên Hải"] },
        "Lâm Đồng": { "Thành phố Đà Lạt": ["Phường 1", "Phường 2"], "Thành phố Bảo Lộc": ["Phường 1", "Phường 2"] },
        "Nghệ An": { "Thành phố Vinh": ["Phường Bến Thủy", "Phường Cửa Nam"] },
        "Ninh Bình": { "Thành phố Ninh Bình": ["Phường Đông Thành", "Phường Nam Thành"] },
        "Phú Thọ": { "Thành phố Việt Trì": ["Phường Bạch Hạc", "Phường Bến Gót"] },
        "Quảng Ngãi": { "Thành phố Quảng Ngãi": ["Phường Chánh Lộ", "Phường Lê Hồng Phong"] },
        "Quảng Ninh": { "Thành phố Hạ Long": ["Phường Bạch Đằng", "Phường Bãi Cháy"] },
        "Quảng Trị": { "Thành phố Đông Hà": ["Phường 1", "Phường 2"] },
        "Sơn La": { "Thành phố Sơn La": ["Phường Chiềng Cơi", "Phường Quyết Thắng"] },
        "Tây Ninh": { "Thành phố Tây Ninh": ["Phường 1", "Phường 2"] },
        "Thái Nguyên": { "Thành phố Thái Nguyên": ["Phường Đồng Quang", "Phường Gia Sàng"] },
        "Thanh Hóa": { "Thành phố Thanh Hóa": ["Phường Ba Đình", "Phường Hàm Rồng"] },
        "Tuyên Quang": { "Thành phố Tuyên Quang": ["Phường Hưng Thành", "Phường Minh Xuân"] },
        "Vĩnh Long": { "Thành phố Vĩnh Long": ["Phường 1", "Phường 2"] }
    };

    const citySelect = document.getElementById('city');
    const districtSelect = document.getElementById('district');
    const wardSelect = document.getElementById('ward');

    function populateSelect(selectElement, items) {
        selectElement.length = 1;
        for (const item of items) {
            selectElement.options[selectElement.options.length] = new Option(item, item);
        }
    }

    citySelect.addEventListener('change', function () {
        const selectedCity = this.value;
        wardSelect.length = 1;
        wardSelect.disabled = true;

        if (selectedCity && addressData[selectedCity]) {
            const districts = Object.keys(addressData[selectedCity]);
            populateSelect(districtSelect, districts);
            districtSelect.disabled = false;
        } else {
            districtSelect.length = 1;
            districtSelect.disabled = true;
        }
    });

    districtSelect.addEventListener('change', function () {
        const selectedCity = citySelect.value;
        const selectedDistrict = this.value;

        if (selectedCity && selectedDistrict && addressData[selectedCity][selectedDistrict]) {
            const wards = addressData[selectedCity][selectedDistrict];
            populateSelect(wardSelect, wards);
            wardSelect.disabled = false;
        } else {
            wardSelect.length = 1;
            wardSelect.disabled = true;
        }
    });

    districtSelect.disabled = true;
    wardSelect.disabled = true;



    const orderButtonLink = document.getElementById('link_btn');

    orderButtonLink.addEventListener('click', function (event) {
        // 1. Ngăn chặn link chuyển trang ngay lập tức
        event.preventDefault();

        // 2. Thu thập tất cả dữ liệu từ form
        const customerData = {
            fullname: document.getElementById('fullname').value,
            phone: document.getElementById('phone').value,
            city: document.getElementById('city').value,
            district: document.getElementById('district').value,
            ward: document.getElementById('ward').value,
            address: document.getElementById('specific-address').value,

            // Lấy các thông tin khác (nếu cần)
            gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').parentElement.textContent.trim() : '',
            shippingMethod: document.querySelector('input[name="delivery"]:checked') ? document.querySelector('input[name="delivery"]:checked').parentElement.textContent.trim() : ''
        };

        // 3. (Optional) Kiểm tra dữ liệu
        if (!customerData.fullname || !customerData.phone || !customerData.city || !customerData.district || !customerData.ward || !customerData.address) {
            alert('Vui lòng điền đầy đủ thông tin giao hàng!');
            return; // Dừng lại không chuyển trang
        }

        // 4. Lưu dữ liệu vào sessionStorage
        // (sessionStorage sẽ tự xoá khi người dùng đóng tab)
        sessionStorage.setItem('customerOrderData', JSON.stringify(customerData));

        // 5. Chuyển hướng đến trang Confirm
        window.location.href = this.href;
    });

});
