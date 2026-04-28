const { test, expect } = require('@playwright/test');
const LeadPage = require('../pages/LeadPage');
const dataFactory = require('../utils/dataFactory');

test('Leadrat Lead Form with API Validation', async ({ page }) => {

  const leadPage = new LeadPage(page);
  const user = dataFactory.createLeadUser();
  console.log('Generated User:', user);
  await leadPage.openForm();
  console.log('Opened Lead Form');
  await leadPage.fillForm(user);
  console.log('Filled Form');
  const responsePromise = page.waitForResponse(response =>
    response.request().method() === 'POST'
  );

  await leadPage.submitForm();
  console.log('Form Submitted');
  const response = await responsePromise;
  console.log('API Status:', response.status());
  expect(response.ok()).toBeTruthy();
  await leadPage.verifySuccess();

  console.log('--- TEST PASSED ---');
});