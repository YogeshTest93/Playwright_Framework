const { expect } = require('@playwright/test');

class RegisterPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.maleRadio = page.getByRole('radio', { name: 'Male', exact: true });
    this.firstNameInput = page.getByRole('textbox', { name: 'First name:' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name:' });
    this.emailInput = page.getByRole('textbox', { name: 'Email:' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password:', exact: true });
    this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm password:' });
    this.registerButton = page.getByRole('button', { name: 'Register' });
    this.registrationSuccessMessage = page.getByText('Your registration completed');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
  }

  async registerUser(firstName, lastName, email, password) {
    await this.maleRadio.check();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    await this.registerButton.click();
  }

  async verifyRegistrationSuccess() {
    await expect(this.registrationSuccessMessage).toBeVisible();
  }

  async clickContinue() {
    await this.continueButton.click();
  }
}

module.exports = RegisterPage;