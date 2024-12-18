document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value; 
    const email = document.getElementById('email').value;
    const password = document.getElementById('loginPassword').value;

    const user = { name: username, email: email, password: password };

    try {
        const response = await fetch("http://localhost:8082/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(user)
        });

        const result = await response.json();

        if (response.ok) {
            console.log("Registration successful:", result);
            window.location.href = './index.html';
        } else {
            console.error("Error response from server:", result);
            alert("Registration failed: " + result.message);
        }
    } catch (error) {
        console.error("Error registering user:", error);
        alert("An unexpected error occurred. Please try again later.");
    }
});
