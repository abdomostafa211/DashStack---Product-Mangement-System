Product Management System

This is a simple Product Management System that allows users to add, update, delete, and search products. The system uses localStorage for saving the products and the currently logged-in user.
Features

    Add Product: Add new products by entering the title, price, taxes, discount, and category.

    Update Product: Update the product's details after it has been added.

    Delete Product: Delete individual products or delete all products at once.

    Search Products: Search products by title or category.

    User Login & Registration: Users can log in with a registered email/username and password.

    Logout: The user can log out, clearing their session data.

Technologies Used

    HTML5

    CSS3

    JavaScript

    LocalStorage (for saving product data and user sessions)

Project Setup
1. Clone the Repository

To get started with this project, clone the repository to your local machine:

git clone https://github.com/abdomostafa211/DashStack---Product-Mangement-System.git

2. Navigate to the Project Folder

Once cloned, navigate to the folder where the project is saved:

cd product-management-system

3. Open the Project in a Browser

Simply open the index.html file in your browser to start using the application:

    Open the index.html file in your preferred browser to view and interact with the project.

4. Run the Project

You don't need any specific setup or server to run the project. It works with just HTML, CSS, and JavaScript files. However, for local development, you may want to use a local server:

    Use Live Server (VS Code Extension) or any static file server like http-server to serve the project locally.

How to Use

    Login / Register:

        To use the system, first, log in by entering your registered email and password or create a new account.

        After successful login, you'll be redirected to the home page.

    Managing Products:

        Once logged in, you'll see options to Add a Product, View Products, Update Product, Delete Product, and Search Products.

    Product Details:

        Each product includes the following fields:

            Title

            Price

            Taxes

            Discount

            Category

            Total (calculated automatically based on price, taxes, and discount)

    Search:

        You can search for products either by Title or Category.

    Logout:

        When you're done, you can log out to clear your session data and return to the login page.

File Structure

product-management-system/
│
├── index.html                # Registration page HTML file
├── login.html                # Login page HTML file
├── login.js                  # JavaScript for handling login functionality
├── register.js               # JavaScript for handling registration functionality
├── home.html                 # Home page HTML file after login
├── home.css                  # CSS specific to the home page
├── home.js                   # JavaScript for managing home page functionality
└── README.md                 # Project documentation (this file)


Contribution

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

    Fork the repository.

    Create a new branch (git checkout -b feature-name).

    Commit your changes (git commit -am 'Add feature').

    Push to the branch (git push origin feature-name).

    Create a new Pull Request.

