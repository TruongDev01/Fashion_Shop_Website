# 🛍️ Forever Fashion Shop Website - A Comprehensive E-Commerce Solution

This project is a modern, **full-stack** fashion e-commerce platform built to provide a seamless online shopping experience for users and a robust management system for administrators.

Forever Fashion Shop is developed with a combination of advanced technologies, ensuring high performance, scalability, and an attractive user interface.

***

## ✨ Key Features

### 🌐 User Frontend

* **Dynamic Homepage:** Displays the latest collections and best-selling products.
* **Flexible Product Listing:** Allows product filtering by **Category** (`Men`, `Women`, `Kids`) and **Type** (`Topwear`, `Bottomwear`, `Winterwear`).
* **Smart Search:** A powerful search feature, displayed only on the Collection page to optimize the user experience.
* **Cart Management:** Users can easily add products to the cart (with a mandatory size selection), update quantities, or remove items.
* **Checkout Process:** Supports entering delivery information and selecting flexible payment methods like **COD (Cash on Delivery)**, **Stripe**, and **Razorpay**.
* **Account Management:** User login/registration and order history viewing.

### 🛠️ Admin Panel

* **Admin Security:** Requires admin login with credentials configured in environment variables to access.
* **Add New Products:** An intuitive interface to add product details, including name, description, price, category, sub-category, size options, and up to **4 product images**.
* **Product Management:** View list, edit, and remove products.
* **Order Management:** Interface to track and manage orders.

### ⚙️ Backend (API)

* **NoSQL Database:** Uses MongoDB to store product, user, and cart data.
* **Cloud Storage:** Integrates Cloudinary for secure storage of product image files.
* **Security:** Uses **bcrypt** for password hashing and **jsonwebtoken (JWT)** for user and admin authentication.

***

## 💻 Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | **React.js** (v19.1.1) + **Vite** | A leading JavaScript library for building fast, modern user interfaces. |
| **Styling** | **Tailwind CSS** | A utility-first CSS framework for custom, responsive UI development. |
| **Backend** | **Node.js** + **Express** | Runtime environment and web application framework for building robust API servers. |
| **Database** | **MongoDB** (via Mongoose) | A flexible, high-performance NoSQL database. |
| **Image Storage**| **Cloudinary** | Cloud-based asset management and storage service. |
| **Auth** | **JWT** + **bcrypt** + **validator** | Secure login with password hashing, tokens, and email validation. |
| **Payments** | **Stripe** & **Razorpay** | Payment gateway integrations (planned). |

***

## 📸 Demo Screenshots

**(Please insert your website's demo screenshots in the sections below)**

### Home Page

[Insert Home Page screenshot here]

### Product Details Page

[Insert Product Details screenshot here]

### Cart & Checkout

[Insert Cart or Checkout page screenshot here]

### Admin Panel

[Insert Admin Panel (e.g., Add Product/List) screenshot here]

***

## 📜 License

This project is licensed under the MIT License.
