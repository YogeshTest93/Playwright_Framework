const { test, expect } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const RegisterPage = require('../pages/RegisterPage');
const LoginPage = require('../pages/LoginPage');
const { userData } = require('../utils/testData');

test('User should register and login successfully', async ({ page }) => {
  const homePage = new HomePage(page);
  const registerPage = new RegisterPage(page);
  const loginPage = new LoginPage(page);

  // Open application
  await homePage.openWebsite();
  await expect(page).toHaveTitle(/Demo Web Shop/);

  // Register new user
  await homePage.clickRegister();
  await expect(page).toHaveURL(/register/);

  await registerPage.registerUser(
    userData.firstName,
    userData.lastName,
    userData.email,
    userData.password
  );

  // Validate registration success
  await registerPage.verifyRegistrationSuccess();

  // Continue to homepage/dashboard
  await registerPage.clickContinue();

  // Validate user is logged in after registration
  await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
  await expect(page.getByRole('link', { name: userData.email })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

  // Logout
  await homePage.clickLogout();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();

  // Login again with same user
  await homePage.clickLogin();
  await expect(page).toHaveURL(/login/);

  await loginPage.login(userData.email, userData.password);

  // Validate successful login
  await loginPage.verifyLoginSuccess(userData.email);
  await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
});