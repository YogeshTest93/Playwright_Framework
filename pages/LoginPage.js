// const { expect } = require('@playwright/test');

// class LoginPage {
//   constructor(page) {
//     this.page = page;

//     // Locators
//     this.emailInput = page.getByRole('textbox', { name: 'Email:' });
//     this.passwordInput = page.getByRole('textbox', { name: 'Password:' });
//     this.rememberMeCheckbox = page.getByRole('checkbox', { name: 'Remember me?' });
//     this.loginButton = page.getByRole('button', { name: 'Log in' });
//   }

//   async loginUser(email, password) {
//     await this.emailInput.fill(email);
//     await this.passwordInput.fill(password);
//     await this.rememberMeCheckbox.check();
//     await this.loginButton.click();
//   }

//   async verifyLoginSuccess(email) {
//     await expect(this.page.getByRole('link', { name: email })).toBeVisible();
//     await expect(this.page.getByRole('link', { name: 'Log out' })).toBeVisible();
//   }
// }

// module.exports = LoginPage;

const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.emailInput = page.getByRole('textbox', { name: 'Email:' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password:' });
    this.rememberMeCheckbox = page.getByRole('checkbox', { name: 'Remember me?' });
    this.loginButton = page.getByRole('button', { name: 'Log in' });
    this.logoutLink = page.getByRole('link', { name: 'Log out' });
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginSuccess(email) {
    await expect(this.page.getByText(email)).toBeVisible();
    await expect(this.logoutLink).toBeVisible();
  }
}

module.exports = LoginPage;