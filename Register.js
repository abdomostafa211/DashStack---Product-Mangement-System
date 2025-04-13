document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the page from reloading

    //Get the values from the form
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    //Check if the passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    //Prepare the new user data
    const newUser = {
      username,
      email,
      password,
    };

    //Get existing users from localStorage (or empty array if none)
    const users = JSON.parse(localStorage.getItem("users")) || [];

    //Check if email already exists
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
      alert("Email already registered!");
      return;
    }

    //Add the new user to the array
    users.push(newUser);
 
    //Save the updated array back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    //Save the current user session (optional)
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    //Redirect to the home page
    window.location.href = "home.html";
  });
