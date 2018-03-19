const faker = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("employees")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("employees").insert([
        {
          id: 1,
          company: "Northwind Traders",
          last_name: "Freehafer",
          first_name: "Nancy",
          email_address: "nancy@northwindtraders.com",
          job_title: "Sales Representative",
          business_phone: "(123)555-0100",
          home_phone: "(123)555-0102",
          mobile_phone: null,
          fax_number: "(123)555-0103",
          address: "123 1st Street",
          city: "Seattle",
          state_province: "WA",
          zip_postal_code: "99999",
          country_region: "USA",
          web_page: "#http://northwindtraders.com#",
          notes: null,
          attachments: ""
        },
        {
          id: 2,
          company: "Northwind Traders",
          last_name: "Cencini",
          first_name: "Andrew",
          email_address: "andrew@northwindtraders.com",
          job_title: "Vice President, Sales",
          business_phone: "(123)555-0100",
          home_phone: "(123)555-0102",
          mobile_phone: null,
          fax_number: "(123)555-0103",
          address: "123 2nd Street",
          city: "Bellevue",
          state_province: "WA",
          zip_postal_code: "99999",
          country_region: "USA",
          web_page: "http://northwindtraders.com#http://northwindtraders.com/#",
          notes:
            "Joined the company as a sales representative, was promoted to sales manager and was then named vice president of sales.",
          attachments: ""
        },
        {
          id: 3,
          company: "Company C",
          last_name: "Axen",
          first_name: "Thomas",
          email_address: null,
          job_title: "Purchasing Representative",
          business_phone: "(123)555-0100",
          home_phone: null,
          mobile_phone: null,
          fax_number: "(123)555-0100",
          address: "123 3rd Street",
          city: "Los Angelas",
          state_province: "CA",
          zip_postal_code: "99999",
          country_region: "USA",
          web_page: null,
          notes: null,
          attachments: ""
        }
      ]);
    });
};

function generateRandomData(ammount) {
  let output = [];
  for (let i = 1; ammount; i++) {
    output.push({
      id: i,
      company: faker.company.companyName,
      last_name: faker.name.lastName,
      first_name: faker.name.firstName,
      email_address: faker.internet.email,
      job_title: faker.name.jobDescriptor,
      business_phone: faker.phone.phoneNumber,
      home_phone: faker.phone.phoneNumber,
      mobile_phone: faker.phone.phoneNumber,
      fax_number: faker.phone.phoneNumber,
      address: faker.address.streetAddress,
      city: faker.address.city,
      state_province: faker.address.state,
      zip_postal_code: faker.address.zipCode,
      country_region: faker.address.countryCode,
      web_page: faker.internet.url,
      notes: faker.lorem.paragraph,
      attachments: ""
    });
    return output;
  }
}
