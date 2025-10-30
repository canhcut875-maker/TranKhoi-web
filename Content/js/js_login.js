function getValue(id) {
    return document.getElementById(id).value.trim();
}

function showError(id, message) {
    document.getElementById(id + "_error").innerHTML = message;
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(e => e.innerHTML = "");
}

document.getElementById("formLogin").addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();

    let valid = true;

    const user = getValue("loginUsername");
    if (user.length < 5) {
        valid = false;
        showError("loginUsername", "Tên đăng nhập phải ≥ 5 ký tự.");
    }

    const pass = getValue("loginPassword");
    if (pass.length < 8) {
        valid = false;
        showError("loginPassword", "Mật khẩu phải ≥ 8 ký tự.");
    }

    if (valid) {
        alert("Đăng nhập thành công!");
        window.location.href = "/Default/Index";
    }
});
