# Shopping Cart App

## Description

This project is a simple shopping cart web application built with **React**, **TypeScript**, **Redux Toolkit**, and **Vite**.  
It demonstrates a basic e-commerce workflow: browsing products, adding/removing items from the cart, viewing the order summary, and confirming the order.

---

## Approach

- **State Management:** The cart state is managed globally using Redux Toolkit (**not persisted between sessions**).
- **localStorage:** Used for passing order data to the static order confirmation page after placing an order.  
  The cart will be fully persisted in localStorage in the future.
- **Routing:** The app uses React Router for navigation between the product list, cart, and order summary.
- **Order Confirmation:** After placing an order, the user is redirected to a static HTML confirmation page (`order-confirmation.html`) that reads order data from `localStorage`.
- **Styling:** The app uses a simple CSS file for styling.

---

## How to Run
- Live version: https://hiremefulltime.github.io/Katarzyna_Chmielecka__Web_Wroclaw/
- Local version:
 (in terminal, on your computer):
1. **Clone the repository:**

- git clone (https://github.com/HireMeFullTime/Katarzyna_Chmielecka__Web_Wroclaw.git)
- cd Katarzyna_Chmielecka__Web_Wroclaw


2. **Install dependencies:**
npm install / npm i

3. **Start the development server:**
npm run dev

4. **Open your browser and go to:**  
http://localhost:5173/Katarzyna_Chmielecka__Web_Wroclaw/
(or the address shown in your terminal)

---

##To do:
- fully responsive app
- fully persiste cart
- login/register
- purchase history

