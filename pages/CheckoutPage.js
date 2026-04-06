const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;

    // Billing Address
    this.billingSection = page.locator('#opc-billing');
    this.billingContinueButton = page.locator("//div[@id='billing-buttons-container']//input");
    this.countryDropdown = page.locator('#BillingNewAddress_CountryId');
    this.cityInput = page.locator('#BillingNewAddress_City');
    this.address1Input = page.locator('#BillingNewAddress_Address1');
    this.zipCodeInput = page.locator('#BillingNewAddress_ZipPostalCode');
    this.phoneInput = page.locator('#BillingNewAddress_PhoneNumber');

    // Shipping Address
    this.shippingAddressContinueButton = page.locator("//div[@id='shipping-buttons-container']//input");

    // Shipping Method
    this.shippingMethodContinueButton = page.locator("//div[@id='shipping-method-buttons-container']//input");

    // Payment Method
    this.cashOnDeliveryRadio = page.locator('#paymentmethod_0');
    this.paymentMethodContinueButton = page.locator("//div[@id='payment-method-buttons-container']//input");

    // Payment Information
    this.paymentInfoContinueButton = page.locator("//div[@id='payment-info-buttons-container']//input");

    // Confirm Order
    this.confirmOrderButton = page.locator("//div[@id='confirm-order-buttons-container']//input");

    // Success
    this.orderSuccessMessage = page.getByText('Your order has been successfully processed!');
  }

  async verifyCheckoutPageOpened() {
    await expect(this.page).toHaveURL(/onepagecheckout/);
    await expect(this.billingSection).toBeVisible();
  }

  async fillBillingAddress(country, city, address, zipCode, phone) {
    // Wait for billing section
    await this.billingSection.waitFor({ state: 'visible' });

    // If country dropdown is visible, fill address
    if (await this.countryDropdown.isVisible()) {
      await this.countryDropdown.selectOption({ label: country });
      await this.cityInput.fill(city);
      await this.address1Input.fill(address);
      await this.zipCodeInput.fill(zipCode);
      await this.phoneInput.fill(phone);
    }

    // Continue billing step
    await this.billingContinueButton.click();
  }

  async continueShippingAddress() {
    await this.shippingAddressContinueButton.click();
  }

  async continueShippingMethod() {
    await this.shippingMethodContinueButton.click();
  }

  async selectCashOnDelivery() {
    if (await this.cashOnDeliveryRadio.isVisible()) {
      await this.cashOnDeliveryRadio.check();
    }
    await this.paymentMethodContinueButton.click();
  }

  async continuePaymentInfo() {
    await this.paymentInfoContinueButton.click();
  }

  async confirmOrder() {
    await this.confirmOrderButton.click();
  }

  async verifyOrderSuccess() {
    await expect(this.orderSuccessMessage).toBeVisible();
  }
}

module.exports = CheckoutPage;