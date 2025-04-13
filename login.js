document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload

    // Get input values
    const emailOrUsername = document.getElementById("loginEmailOrUsername").value.trim();
    const password = document.getElementById("loginPassword").value;

    // Get all users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user by either email or username, and check if the password matches
    const matchedUser = users.find(user => 
        (user.email === emailOrUsername || user.username === emailOrUsername) && user.password === password
    );

    if (matchedUser) {
        // Successful login
        localStorage.setItem("currentUser", JSON.stringify(matchedUser)); // Store logged-in user
        window.location.href = "home.html"; // Redirect to home
    } else {
        // Failed login
        alert("Invalid email/username or password!");
    }
});
