const { test, expect } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const { existingUser, productData, billingAddress } = require('../utils/testData');

test('User should complete checkout using COD', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Open site
  await page.goto('https://demowebshop.tricentis.com/');

  // Login
  await homePage.clickLogin();
  await loginPage.login(existingUser.email, existingUser.password);

  await expect(page.getByText(existingUser.email)).toBeVisible();

  // Search product
  await homePage.searchProduct(productData.searchKeyword);

  // Open product
  await productPage.openBlueJeansProduct();
  await productPage.verifyProductPageOpened();

  // Add to cart
  await productPage.addProductToCart();
  await productPage.verifyProductAddedToCart();

  // Go to cart
  await productPage.goToCart();
  await cartPage.verifyProductInCart(productData.name);

  // Checkout
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

  // Final validation
  await checkoutPage.verifyOrderSuccess();
});