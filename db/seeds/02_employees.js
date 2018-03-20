const faker = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("employees")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("employees").insert(generateRandomData(50));
    });
};

function generateRandomData(ammount) {
  let output = [];
  for (let i = 1; i < ammount + 1; i++) {
    output.push({
      id: i,
      company: faker.company.companyName(),
      last_name: faker.name.lastName(),
      first_name: faker.name.firstName(),
      email_address: faker.internet.email(),
      job_title: faker.name.jobDescriptor(),
      business_phone: faker.phone.phoneNumber(),
      home_phone: faker.phone.phoneNumber(),
      mobile_phone: faker.phone.phoneNumber(),
      fax_number: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state_province: faker.address.state(),
      zip_postal_code: faker.address.zipCode(),
      country_region: faker.address.countryCode(),
      web_page: faker.internet.url(),
      notes: faker.lorem.paragraph(),
      attachments: ""
    });
  }
  return output;
}
