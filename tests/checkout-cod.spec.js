// const { test, expect } = require('@playwright/test');

// const HomePage = require('../pages/HomePage');
// const LoginPage = require('../pages/LoginPage');
// const ProductPage = require('../pages/ProductPage');
// const CartPage = require('../pages/CartPage');
// const CheckoutPage = require('../pages/CheckoutPage');
// const { existingUser, productData, billingAddress } = require('../utils/testData');

// test('User should complete checkout using COD', async ({ page }) => {
//   const homePage = new HomePage(page);
//   const loginPage = new LoginPage(page);
//   const productPage = new ProductPage(page);
//   const cartPage = new CartPage(page);
//   const checkoutPage = new CheckoutPage(page);

//   // Open site
//   await page.goto('https://demowebshop.tricentis.com/');

//   // Login
//   await homePage.clickLogin();
//   await loginPage.login(existingUser.email, existingUser.password);

//   await expect(page.getByText(existingUser.email)).toBeVisible();

//   // Search product
//   await homePage.searchProduct(productData.searchKeyword);

//   // Open product
//   await productPage.openBlueJeansProduct();
//   await productPage.verifyProductPageOpened();

//   // Add to cart
//   await productPage.addProductToCart();
//   await productPage.verifyProductAddedToCart();

//   // Go to cart
//   await productPage.goToCart();
//   await cartPage.verifyProductInCart(productData.name);

//   // Checkout
//   await cartPage.acceptTermsAndCheckout();

//   // Checkout flow
//   await checkoutPage.verifyCheckoutPageOpened();

//   await checkoutPage.fillBillingAddress(
//     billingAddress.country,
//     billingAddress.city,
//     billingAddress.address,
//     billingAddress.zipCode,
//     billingAddress.phone
//   );

//   await checkoutPage.continueShippingAddress();
//   await checkoutPage.continueShippingMethod();
//   await checkoutPage.selectCashOnDelivery();
//   await checkoutPage.continuePaymentInfo();
//   await checkoutPage.confirmOrder();

//   // Final validation
//   await checkoutPage.verifyOrderSuccess();
// });
const { test, expect } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const { existingUser, productData, billingAddress } = require('../utils/testData');

test('User should add 2 products from different categories and complete checkout using COD', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Open site
  await homePage.goToHomePage();

  // Login
  await homePage.clickLogin();
  await loginPage.loginUser(existingUser.email, existingUser.password);
  await expect(page.getByText(existingUser.email)).toBeVisible();

  // =========================
  // Add Product 1 - Blue Jeans
  // =========================
  await homePage.searchProduct(productData.product1.searchKeyword);
  await productPage.openBlueJeansProduct();
  await productPage.verifyProductPageOpened();
  await productPage.addProductToCart();

  // Go back home
  await homePage.goToHomePage();

  await homePage.searchProduct(productData.product2.searchKeyword);
await page.getByRole('link', { name: '14.1-inch Laptop', exact: true }).click();
await expect(page).toHaveURL(/141-inch-laptop/);
await page.locator('#add-to-cart-button-31').click();

  // Open cart
  await page.getByRole('link', { name: 'Shopping cart', exact: true }).click();

  // Validate both products in cart
   await expect(page.getByRole('link', { name: 'Blue Jeans', exact: true })).toBeVisible();
   await expect(page.getByRole('link', { name: '14.1-inch Laptop', exact: true })).toBeVisible();

  // Accept terms and checkout
  await cartPage.acceptTermsAndCheckout();

  // Checkout flow
  await checkoutPage.verifyCheckoutPageOpened();
  await checkoutPage.fillBillingAddress(
    billingAddress.country,
    billingAddress.city,
    billingAddress.address,
    billingAddress.zipCode,
    billingAddress.phone
  );

  await checkoutPage.continueShippingAddress();
  await checkoutPage.continueShippingMethod();
  await checkoutPage.selectCashOnDelivery();
  await checkoutPage.continuePaymentInfo();
  await checkoutPage.confirmOrder();
  await checkoutPage.verifyOrderSuccess();
});