const { faker } = require('@faker-js/faker');

// Generate dynamic user data
const userData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: `yogesh${Date.now()}@gmail.com`, // stable + unique
  password: 'Yogesh@11'
};

// Static login user (for checkout test)
const existingUser = {
  email: 'Yogesh.1qa+01@gmail.com',
  password: 'Yogesh@11'
};

// Product data
const productData = {
  name: 'Blue Jeans',
  searchKeyword: 'Blue Jeans'
};

// Billing Address
const billingAddress = {
  country: 'India',
  city: faker.location.city(),
  address: faker.location.streetAddress(),
  zipCode: '560037',
  phone: '9717887717'
};

module.exports = {
  userData,
  existingUser,
  productData,
  billingAddress
};