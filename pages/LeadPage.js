const { expect } = require('@playwright/test');

class LeadPage {

  constructor(page) {
    this.page = page;
    this.getQuoteBtn = page.getByRole('link', { name: 'Get Quote' });
    this.nameInput = page.locator('#form-field-name');
    this.emailInput = page.locator('#form-field-email');
    this.phoneInput = page.locator('#form-field-Phone');
    this.companyInput = page.locator('#form-field-Company');

    this.submitBtn = page.getByRole('button', { name: 'Send' });
    this.successMsg = page.getByText('The form was sent');
  }

  async openForm() {
    await this.page.goto('https://leadrat.com/');
    await this.getQuoteBtn.click();
  }

  async fillForm(user) {
    await this.nameInput.fill(user.name);
    await this.emailInput.fill(user.email);
    await this.phoneInput.fill(user.phone);
    await this.companyInput.fill(user.company);
  }

  async submitForm() {
    await this.submitBtn.click();
  }

 async verifySuccess() {
  await expect(this.page).toHaveURL(/thank-you/);
}
}

module.exports = LeadPage;