# Demo Web Shop Automation Assignment

## Tech Stack
- Playwright
- JavaScript
- Page Object Model (POM)
- Faker (for dynamic test data)

## Covered Use Cases

### 1. Register and Login
- User registration with dynamic email
- Successful registration validation
- Logout and login with same credentials

### 2. Product Search, Add to Cart and Checkout
- Search for product (Blue Jeans)
- Add product to cart
- Accept terms and checkout
- Complete checkout using Cash on Delivery
- Validate successful order placement

## Framework Design
This project is designed using the **Page Object Model (POM)** approach for better:
- Maintainability
- Reusability
- Readability
- Scalability

## Project Structure
```bash
Demo_Framework/
│
├── pages/
│   ├── HomePage.js
│   ├── RegisterPage.js
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── tests/
│   ├── register-login.spec.js
│   └── checkout-cod.spec.js
│
├── utils/
│   ├── fakerUtils.js
│   └── testData.js
│
├── playwright.config.js
├── package.json
└── README.md