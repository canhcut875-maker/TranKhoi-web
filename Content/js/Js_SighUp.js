function getValue(id) {
    return document.getElementById(id).value.trim();
}

function showError(id, message) {
    document.getElementById(id + "_error").innerHTML = message;
}

function clearErrors() {
    document.querySelectorAll("span[id$='_error'], div[id$='_error']").forEach(e => e.innerHTML = "");
}

document.getElementById("formsighup").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn submit mặc định
    clearErrors(); // Xóa lỗi cũ
    let valid = true;

    // 1. Họ và tên
    const name = getValue("name");
    if (name.length < 2) {
        valid = false;
        showError("hovaten", "Họ tên phải có ít nhất 2 ký tự.");
    }

    // 2. Email
    const email = getValue("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        valid = false;
        showError("email", "Email không hợp lệ.");
    }

    // 3. Số điện thoại
    const sdt = getValue("sdt");
    const sdtRegex = /^(03|05|07|08|09)[0-9]{8}$/;
    if (!sdtRegex.test(sdt)) {
        valid = false;
        showError("sdt", "Số điện thoại phải gồm 10 số (VD: 09xxxxxxxx).");
    }

    // 4. Username
    const userName = getValue("userName");
    const userRegex = /^[a-zA-Z0-9]{5,}$/;
    if (!userRegex.test(userName)) {
        valid = false;
        showError("userName", "Tên đăng nhập phải ít nhất 5 ký tự và không chứa ký tự đặc biệt.");
    }

    // 5. Password
    const password = getValue("password");
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passRegex.test(password)) {
        valid = false;
        showError("password", "Mật khẩu phải ≥ 8 ký tự, gồm chữ, số và ký tự đặc biệt.");
    }

    // 6. Nhập lại mật khẩu
    const rePassword = getValue("rePassword");
    if (rePassword !== password) {
        valid = false;
        showError("rePassword", "Mật khẩu nhập lại không trùng khớp.");
    }

    // Nếu hợp lệ → Submit form
    if (valid) {
        // Lưu dữ liệu vào LocalStorage
        const account = {
            username: userName,
            password: password
        };

        localStorage.setItem("userAccount", JSON.stringify(account));

        alert("Đăng ký thành công!");
        window.location.href = "/Default/UserLogin"; // điều hướng tới trang đăng nhập
    }
});