function registerUser() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Client-side validation
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    if(password == confirmPassword){
        alert("Passwords Matched!");
        return;
    }

    // Send data to the server (you would need to implement this part)
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        // You can redirect the user or perform other actions based on the server response
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}