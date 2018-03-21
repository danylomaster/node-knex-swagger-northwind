"use strict";

const knex = require("../db/knex");
const table_name = "customers";
var utils = require("../utils/writer.js");
var Customers = require("../service/CustomersService");

const bookshelf = require("../db/bookshelf");

var Customer = bookshelf.Model.extend({
  tableName: "customers"
});

module.exports.createCustomer = function createCustomer(req, res, next) {
  var company = req.swagger.params["company"].value;
  var last_name = req.swagger.params["last_name"].value;
  var first_name = req.swagger.params["first_name"].value;
  var email_address = req.swagger.params["email_address"].value;
  var job_title = req.swagger.params["job_title"].value;
  var business_phone = req.swagger.params["business_phone"].value;
  var home_phone = req.swagger.params["home_phone"].value;
  var mobile_phone = req.swagger.params["mobile_phone"].value;
  var fax_number = req.swagger.params["fax_number"].value;
  var address = req.swagger.params["address"].value;
  var city = req.swagger.params["city"].value;
  var state_province = req.swagger.params["state_province"].value;
  var zip_postal_code = req.swagger.params["zip_postal_code"].value;
  var country_region = req.swagger.params["country_region"].value;
  var web_page = req.swagger.params["web_page"].value;
  var notes = req.swagger.params["notes"].value;
  var attachments = req.swagger.params["attachments"].value;
  // Customers.createCustomer(
  //   company,
  //   last_name,
  //   first_name,
  //   email_address,
  //   job_title,
  //   business_phone,
  //   home_phone,
  //   mobile_phone,
  //   fax_number,
  //   address,
  //   city,
  //   state_province,
  //   zip_postal_code,
  //   country_region,
  //   web_page,
  //   notes,
  //   attachments
  // )
  new Customer({
    company: company,
    last_name: last_name,
    first_name: first_name,
    email_address: email_address,
    job_title: job_title,
    business_phone: business_phone,
    home_phone: home_phone,
    mobile_phone: mobile_phone,
    fax_number: fax_number,
    address: address,
    city: city,
    state_province: state_province,
    zip_postal_code: zip_postal_code,
    country_region: country_region,
    web_page: web_page,
    notes: notes,
    attachments: attachments
  })
    .save()
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCustomer = function deleteCustomer(req, res, next) {
  var customerId = req.swagger.params["customerId"].value;
  new Customer({ id: customerId })
    .destroy()
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
  // Customers.deleteCustomer(customerId)
  //   .then(function(response) {
  //     utils.writeJson(res, response);
  //   })
  //   .catch(function(response) {
  //     utils.writeJson(res, response);
  //   });
};

module.exports.getCustomerById = function getCustomerById(req, res, next) {
  var customerId = req.swagger.params["customerId"].value;

  new Customer()
    .where("id", customerId)
    .fetch()
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });

  // knex
  //   .select("*")
  //   .from(table_name)
  //   .where("id", customerId)
  //   .then(function(response) {
  //     utils.writeJson(res, response);
  //   })
  //   .catch(function(response) {
  //     utils.writeJson(res, response);
  //   });

  // Customers.getCustomerById(customerId)
  //   .then(function(response) {
  //     utils.writeJson(res, response);
  //   })
  //   .catch(function(response) {
  //     utils.writeJson(res, response);
  //   });
};

module.exports.getCustomers = function getCustomers(req, res, next) {
  // new Article().fetchAll()
  //   .then(function(articles) {
  //     res.send(articles.toJSON());
  //   }).catch(function(error) {
  //     console.log(error);
  //     res.send('An error occured');
  //   });
  new Customer()
    .fetchAll()
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });

  // knex
  //   .select("*")
  //   .from(table_name)
  //   .then(function(response) {
  //     utils.writeJson(res, response);
  //   })
  //   .catch(function(response) {
  //     utils.writeJson(res, response);
  //   });
  // Customers.getCustomers()
  //   .then(function(response) {
  //     utils.writeJson(res, response);
  //   })
  //   .catch(function(response) {
  //     utils.writeJson(res, response);
  //   });
};

module.exports.updateCustomer = function updateCustomer(req, res, next) {
  var customerId = req.swagger.params["customerId"].value;
  var company = req.swagger.params["company"].value;
  var last_name = req.swagger.params["last_name"].value;
  var first_name = req.swagger.params["first_name"].value;
  var email_address = req.swagger.params["email_address"].value;
  var job_title = req.swagger.params["job_title"].value;
  var business_phone = req.swagger.params["business_phone"].value;
  var home_phone = req.swagger.params["home_phone"].value;
  var mobile_phone = req.swagger.params["mobile_phone"].value;
  var fax_number = req.swagger.params["fax_number"].value;
  var address = req.swagger.params["address"].value;
  var city = req.swagger.params["city"].value;
  var state_province = req.swagger.params["state_province"].value;
  var zip_postal_code = req.swagger.params["zip_postal_code"].value;
  var country_region = req.swagger.params["country_region"].value;
  var web_page = req.swagger.params["web_page"].value;
  var notes = req.swagger.params["notes"].value;
  var attachments = req.swagger.params["attachments"].value;
  // Customers.updateCustomer(
  //   customerId,
  //   company,
  //   last_name,
  //   first_name,
  //   email_address,
  //   job_title,
  //   business_phone,
  //   home_phone,
  //   mobile_phone,
  //   fax_number,
  //   address,
  //   city,
  //   state_province,
  //   zip_postal_code,
  //   country_region,
  //   web_page,
  //   notes,
  //   attachments
  // )
  new Customer()
    .where("id", customerId)
    .save(
      {
        company: company,
        last_name: last_name,
        first_name: first_name,
        email_address: email_address,
        job_title: job_title,
        business_phone: business_phone,
        home_phone: home_phone,
        mobile_phone: mobile_phone,
        fax_number: fax_number,
        address: address,
        city: city,
        state_province: state_province,
        zip_postal_code: zip_postal_code,
        country_region: country_region,
        web_page: web_page,
        notes: notes,
        attachments: attachments
      },
      { patch: true }
    )
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};
