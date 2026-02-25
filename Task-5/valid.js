window.onload = function () {
    const form = document.querySelector("form");

    form.onsubmit = function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mob").value.trim();
        const password = document.getElementById("pass").value.trim();

        // Name validation
        if (name.length < 3) {
            alert("Name must be at least 3 characters long.");
            return false;
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        // Mobile validation
        const mobilePattern = /^[0-9]{10}$/;
        if (!mobilePattern.test(mobile)) {
            alert("Mobile number must be exactly 10 digits.");
            return false;
        }

        // Password validation
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/;
        if (!passwordPattern.test(password)) {
            alert("Password must be at least 12 characters long and include uppercase, lowercase, number, and symbol.");
            return false;
        }

        alert("Form submitted successfully!");
        form.submit();
    };
};

