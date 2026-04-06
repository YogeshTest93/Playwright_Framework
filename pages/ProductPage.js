const { expect } = require('@playwright/test');

class ProductPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.blueJeansLink = page.getByRole('link', { name: 'Blue Jeans', exact: true });
    this.addToCartButton = page.locator('#add-to-cart-button-36');
    this.addToCartSuccessMessage = page.getByText('The product has been added to your shopping cart');
    this.shoppingCartLink = page.getByRole('link', { name: /Shopping cart \(\d+\)/ });
  }

  async openBlueJeansProduct() {
    await this.blueJeansLink.click();
  }

  async verifyProductPageOpened() {
    await expect(this.page).toHaveURL(/blue-jeans/);
    await expect(this.page.getByRole('heading', { name: 'Blue Jeans' })).toBeVisible();
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }

  async verifyProductAddedToCart() {
    await expect(this.addToCartSuccessMessage).toBeVisible();
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }
}

module.exports = ProductPage;