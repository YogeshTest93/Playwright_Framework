class HomePage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.getByRole('link', { name: 'Log in' });
    this.registerLink = page.getByRole('link', { name: 'Register' });
    this.searchBox = page.locator('#small-searchterms');
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.logoutLink = page.getByRole('link', { name: 'Log out' });
  }

  async openWebsite() {
    await this.page.goto('https://demowebshop.tricentis.com/');
  }

  async goToHomePage() {
    await this.page.goto('https://demowebshop.tricentis.com/');
  }

  async clickLogin() {
    await this.loginLink.click();
  }

  async clickRegister() {
    await this.registerLink.click();
  }

  async searchProduct(productName) {
    await this.searchBox.fill(productName);
    await this.searchButton.click();
  }

  async clickLogout() {
    await this.logoutLink.click();
  }
}

module.exports = HomePage;