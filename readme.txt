https://e-commerce-websites-tau.vercel.app/


🛒 eCommerce Website Documentation
📌 Project Overview

This project is a front-end eCommerce website built using:

    HTML5 for structure

    CSS3 for styling

    JavaScript for functionality

    JSON for product data and local storage handling

The website includes:

    Homepage with banners and featured products

    Product listing with categories and filtering

    Product detail page

    Cart functionality with localStorage

    Checkout page with form validation

📁 Folder Structure

ecommerce-website/
│
├── index.html              # Homepage
├── shop.html               # All products page
├── product_details.html    # Individual product detail
├── checkout.html           # Checkout form
│
├── css/
│   └── style.css           # Main CSS styles
│
├── js/
│   ├── main.js             # Core JavaScript
│   ├── cart.js             # Cart functionality
│   ├── products.json       # Static product data
│
├── images/                 # All product and UI images
│
└── README.md               # Project documentation

⚙️ Technologies Used
Technology	Purpose
HTML5	Page structure
CSS3	Layout & responsive UI
JavaScript	Dynamic interaction
JSON	Store product data
LocalStorage	Persistent cart storage
🧩 Key Features
1. Product Listing

    Loaded from products.json using fetch().

    Dynamically rendered using JavaScript.

    Supports category filters and search.

2. Add to Cart

    "Add to Cart" buttons add products to cart.

    Stored in localStorage as a JSON array.

    Quantity control supported.

3. Cart Sidebar

    Shows cart items, quantity, and total.

    Allows remove and update actions.

    Appears via Bootstrap Offcanvas or custom modal.

4. Product Detail Page

    Loads individual product info dynamically.

    Users can select quantity and add to cart.

5. Checkout

    Displays cart summary.

    Basic form to simulate purchase (no backend).

    Validates input and clears cart on submit.

🖥️ Pages Description
Page	Description
index.html	Homepage with banner and product slider
shop.html	Product listing and filters
product_details.html	Individual product info and cart button
checkout.html	Order summary and form
✅ Future Enhancements (Optional)

    Login / Signup system

    Backend API integration (Node.js / Firebase)

    Payment gateway integration

    Product reviews and ratings

    Admin panel to manage products

