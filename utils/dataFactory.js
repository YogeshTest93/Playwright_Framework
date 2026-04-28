const { faker } = require('@faker-js/faker');

class DataFactory {

  createLeadUser() {

    const timestamp = new Date().getTime();

    const user = {
      name: faker.person.firstName(),
      email: 'lead' + timestamp + '@gmail.com',
      phone: '98' + timestamp.toString().slice(-8),
      company: faker.company.name()
    };

    return user;
  }
}

module.exports = new DataFactory();