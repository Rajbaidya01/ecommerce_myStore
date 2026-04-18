# 🛒 MyStore – E-commerce React App

## 📌 Project Overview

MyStore is a modern e-commerce web application built using React and Tailwind CSS.
Users can browse products, view detailed information, and manage a shopping cart with authentication.

---

## 🌐 Live Demo

👉 https://ecommerce-my-store.vercel.app

---

## ⚙️ Tech Stack

* React (Vite)
* React Router DOM
* Tailwind CSS
* Context API
* LocalStorage
* FakeStore API

---

## 🚀 Features

* Browse all products
* Product details page
* Search & filter products
* Add to cart (login required)
* Increase / decrease quantity
* Remove items from cart
* Dynamic total price calculation
* Basic login system (localStorage)
* Protected cart route
* Dark mode 🌙
* Code splitting (lazy loading)

---

## 🔐 Authentication

* Simple login (no backend)
* Username stored in localStorage
* Only logged-in users can:

  * Add items to cart
  * Access cart page

---

## 🧠 Key Decisions

* Used Context API for global state management
* Used localStorage instead of backend for simplicity
* Products are public, cart is protected
* Tailwind CSS for fast and responsive UI
* Deployed using Vercel with routing fix

---

## 🛠️ Setup Instructions

```bash
git clone https://github.com/Rajbaidya01/ecommerce_myStore.git
cd ecommerce-app
npm install
npm run dev
```

---

## 🚀 Deployment

Deployed on Vercel with proper routing configuration using `vercel.json`.

---

## 👨‍💻 Author

Raj Baidya
