document.getElementById('forgotPasswordForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('forgotEmail').value;
    const forgotMessage = document.getElementById('forgotMessage');

    try {
        const response = await fetch('http://localhost:8082/auth/forgot-password', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email })
        });

        if (response.ok) {
            forgotMessage.textContent = "Password reset instructions have been sent to your email.";
            forgotMessage.style.color = "green";
            document.getElementById('resetPasswordForm').style.display = "block";
        } else {
            const error = await response.text();
            forgotMessage.textContent = `Error: ${error}`;
            forgotMessage.style.color = "red";
        }
    } catch (error) {
        console.error("Error resetting password:", error);
    }
});

document.getElementById('resetPasswordForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const token = document.getElementById('resetToken').value;
    const newPassword = document.getElementById('newPassword').value;
    const resetMessage = document.getElementById('resetMessage');

    try {
        const response = await fetch(`http://localhost:8082/auth/reset-password?token=${encodeURIComponent(token)}&newPassword=${encodeURIComponent(newPassword)}`, {
            method: "POST",
        });

        if (response.ok) {
            resetMessage.textContent = "Password has been reset successfully.";
            resetMessage.style.color = "green";
        } else {
            const error = await response.text();
            resetMessage.textContent = `Error: ${error}`;
            resetMessage.style.color = "red";
        }
    } catch (error) {
        console.error("Error resetting password:", error);
    }
});
