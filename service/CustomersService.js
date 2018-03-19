"use strict";

/**
 * Create a customer in the database with form data
 *
 *
 * company String Updated company of the customer (optional)
 * last_name String Updated last_name of the customer (optional)
 * first_name String Updated first_name of the customer (optional)
 * email_address String Updated email_address of the customer (optional)
 * job_title String Updated job_title of the customer (optional)
 * business_phone String Updated business_phone of the customer (optional)
 * home_phone String Updated home_phone of the customer (optional)
 * mobile_phone String Updated mobile_phone of the customer (optional)
 * fax_number String Updated fax_number of the customer (optional)
 * address String Updated address of the customer (optional)
 * city String Updated city of the customer (optional)
 * state_province String Updated state_province of the customer (optional)
 * zip_postal_code String Updated zip_postal_code of the customer (optional)
 * country_region String Updated country_region of the customer (optional)
 * web_page String Updated web_page of the customer (optional)
 * notes String Updated notes of the customer (optional)
 * attachments String Updated attachments of the customer (optional)
 * returns ApiResponse
 **/
exports.createCustomer = function(
  company,
  last_name,
  first_name,
  email_address,
  job_title,
  business_phone,
  home_phone,
  mobile_phone,
  fax_number,
  address,
  city,
  state_province,
  zip_postal_code,
  country_region,
  web_page,
  notes,
  attachments
) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      code: 0,
      type: "type",
      message: "message"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Deletes a customer
 *
 *
 * customerId Integer Customer id to delete
 * returns ApiResponse
 **/
exports.deleteCustomer = function(customerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      code: 0,
      type: "type",
      message: "message"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Find customer by ID
 * Returns a single Customer
 *
 * customerId Integer ID of Customer to return
 * returns Customer
 **/
exports.getCustomerById = function(customerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      home_phone: "home_phone",
      address: "address",
      notes: "notes",
      attachments: "attachments",
      city: "city",
      zip_postal_code: "zip_postal_code",
      last_name: "last_name",
      state_province: "state_province",
      fax_number: "fax_number",
      country_region: "country_region",
      web_page: "web_page",
      business_phone: "business_phone",
      email_address: "email_address",
      mobile_phone: "mobile_phone",
      company: "company",
      id: 0,
      first_name: "first_name",
      job_title: "job_title"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * List of all customers
 *
 *
 * returns List
 **/
exports.getCustomers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        home_phone: "home_phone",
        address: "address",
        notes: "notes",
        attachments: "attachments",
        city: "city",
        zip_postal_code: "zip_postal_code",
        last_name: "last_name",
        state_province: "state_province",
        fax_number: "fax_number",
        country_region: "country_region",
        web_page: "web_page",
        business_phone: "business_phone",
        email_address: "email_address",
        mobile_phone: "mobile_phone",
        company: "company",
        id: 0,
        first_name: "first_name",
        job_title: "job_title"
      },
      {
        home_phone: "home_phone",
        address: "address",
        notes: "notes",
        attachments: "attachments",
        city: "city",
        zip_postal_code: "zip_postal_code",
        last_name: "last_name",
        state_province: "state_province",
        fax_number: "fax_number",
        country_region: "country_region",
        web_page: "web_page",
        business_phone: "business_phone",
        email_address: "email_address",
        mobile_phone: "mobile_phone",
        company: "company",
        id: 0,
        first_name: "first_name",
        job_title: "job_title"
      }
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Updates a customer in the store with form data
 *
 *
 * customerId Integer ID of customer that needs to be updated
 * company String Updated company of the customer (optional)
 * last_name String Updated last_name of the customer (optional)
 * first_name String Updated first_name of the customer (optional)
 * email_address String Updated email_address of the customer (optional)
 * job_title String Updated job_title of the customer (optional)
 * business_phone String Updated business_phone of the customer (optional)
 * home_phone String Updated home_phone of the customer (optional)
 * mobile_phone String Updated mobile_phone of the customer (optional)
 * fax_number String Updated fax_number of the customer (optional)
 * address String Updated address of the customer (optional)
 * city String Updated city of the customer (optional)
 * state_province String Updated state_province of the customer (optional)
 * zip_postal_code String Updated zip_postal_code of the customer (optional)
 * country_region String Updated country_region of the customer (optional)
 * web_page String Updated web_page of the customer (optional)
 * notes String Updated notes of the customer (optional)
 * attachments String Updated attachments of the customer (optional)
 * returns ApiResponse
 **/
exports.updateCustomer = function(
  customerId,
  company,
  last_name,
  first_name,
  email_address,
  job_title,
  business_phone,
  home_phone,
  mobile_phone,
  fax_number,
  address,
  city,
  state_province,
  zip_postal_code,
  country_region,
  web_page,
  notes,
  attachments
) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      code: 0,
      type: "type",
      message: "message"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
