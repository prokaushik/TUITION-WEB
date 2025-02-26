function toggleForm() {
    document.getElementById('signin-form').classList.toggle('hidden');
    document.getElementById('signup-form').classList.toggle('hidden');
}

function signIn() {
    let email = document.getElementById("signin-email").value;
    let password = document.getElementById("signin-password").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Sign In Successful!");
}

function signUp() {
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Sign Up Successful!");
}
