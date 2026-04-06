const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.cartHeader = page.getByRole('heading', { name: 'Shopping cart' });
    this.termsCheckbox = page.locator('#termsofservice');
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    this.countryDropdown = page.locator('#CountryId');
    this.zipCodeInput = page.locator('#ZipPostalCode');
    this.estimateShippingButton = page.getByRole('button', { name: 'Estimate shipping' });
  }

  async verifyCartPageOpened() {
    await expect(this.cartHeader).toBeVisible();
    await expect(this.page).toHaveURL(/cart/);
  }

  async verifyProductInCart(productName) {
    await expect(this.page.locator('.cart-item-row .product-name', { hasText: productName })).toBeVisible();
  }

  async estimateShipping(countryLabel, zipCode) {
    await this.countryDropdown.selectOption({ label: countryLabel });
    await this.zipCodeInput.fill(zipCode);
    await this.estimateShippingButton.click();
  }

  async acceptTermsAndCheckout() {
    await this.termsCheckbox.check();
    await this.checkoutButton.click();
  }
}

module.exports = CartPage;