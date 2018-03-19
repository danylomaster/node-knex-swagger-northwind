exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("customers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("customers").insert([
        {
          company: "Company A",
          last_name: "Bedecs",
          first_name: "Anna",
          email_address: null,
          job_title: "Owner",
          business_phone: "(123)555-0100",
          home_phone: null,
          mobile_phone: null,
          fax_number: "(123)555-0101",
          address: "123 1st Street",
          city: "Seattle",
          state_province: "WA",
          zip_postal_code: "99999",
          country_region: "USA",
          web_page: null,
          notes: null,
          attachments: ""
        },
        {
          company: "Company B",
          last_name: "Gratacos Solsona",
          first_name: "Antonio",
          email_address: null,
          job_title: "Owner",
          business_phone: "(123)555-0100",
          home_phone: null,
          mobile_phone: null,
          fax_number: "(123)555-0101",
          address: "123 2nd Street",
          city: "Boston",
          state_province: "MA",
          zip_postal_code: "99999",
          country_region: "USA",
          web_page: null,
          notes: null,
          attachments: ""
        },
        {
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

// 1 INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (1, 'Company A', 'Bedecs', 'Anna', NULL, 'Owner', '(123)555-0100', NULL, NULL, '(123)555-0101', '123 1st Street', 'Seattle', 'WA', '99999', 'USA', NULL, NULL, '');
// 2 INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (2, 'Company B', 'Gratacos Solsona', 'Antonio', NULL, 'Owner', '(123)555-0100', NULL, NULL, '(123)555-0101', '123 2nd Street', 'Boston', 'MA', '99999', 'USA', NULL, NULL, '');
// 3 INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (3, 'Company C', 'Axen', 'Thomas', NULL, 'Purchasing Representative', '(123)555-0100', NULL, NULL, '(123)555-0101', '123 3rd Street', 'Los Angelas', 'CA', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (4, 'Company D', 'Lee', 'Christina', NULL, 'Purchasing Manager', '(123)555-0100', NULL, NULL, '(123)555-0101', '123 4th Street', 'New York', 'NY', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (5, 'Company E', 'O’Donnell', 'Martin', NULL, 'Owner', '(123)555-0100', NULL, NULL, '(123)555-0101', '123 5th Street', 'Minneapolis', 'MN', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (6, 'Company F', 'Pérez-Olaeta', 'Francisco', NULL, 'Purchasing Manager', '(123)555-0100', NULL, NULL, '(123)555-0101', '123 6th Street', 'Milwaukee', 'WI', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (7, 'Company G', 'Xie', 'Ming-Yang', NULL, 'Owner', '(123)555-0100', NULL, NULL, '(123)555-0101', '123 7th Street', 'Boise', 'ID', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (8, 'Company H', 'Andersen', 'Elizabeth', NULL, 'Purchasing Representative', '(123)555-0100', NULL, NULL, '(123)555-0101', '123 8th Street', 'Portland', 'OR', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (9, 'Company I', 'Mortensen', 'Sven', NULL, 'Purchasing Manager', '(123)555-0100', NULL, NULL, '(123)555-0101', '123 9th Street', 'Salt Lake City', 'UT', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (10, 'Company J', 'Wacker', 'Roland', NULL, 'Purchasing Manager', '(123)555-0100', NULL, NULL, '(123)555-0101', '123 10th Street', 'Chicago', 'IL', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (11, 'Company K', 'Krschne', 'Peter', NULL, 'Purchasing Manager', '(123)555-0100', NULL, NULL, '(123)555-0101', '123 11th Street', 'Miami', 'FL', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (12, 'Company L', 'Edwards', 'John', NULL, 'Purchasing Manager', '(123)555-0100', NULL, NULL, '(123)555-0101', '123 12th Street', 'Las Vegas', 'NV', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (13, 'Company M', 'Ludick', 'Andre', NULL, 'Purchasing Representative', '(123)555-0100', NULL, NULL, '(123)555-0101', '456 13th Street', 'Memphis', 'TN', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (14, 'Company N', 'Grilo', 'Carlos', NULL, 'Purchasing Representative', '(123)555-0100', NULL, NULL, '(123)555-0101', '456 14th Street', 'Denver', 'CO', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (15, 'Company O', 'Kupkova', 'Helena', NULL, 'Purchasing Manager', '(123)555-0100', NULL, NULL, '(123)555-0101', '456 15th Street', 'Honolulu', 'HI', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (16, 'Company P', 'Goldschmidt', 'Daniel', NULL, 'Purchasing Representative', '(123)555-0100', NULL, NULL, '(123)555-0101', '456 16th Street', 'San Francisco', 'CA', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (17, 'Company Q', 'Bagel', 'Jean Philippe', NULL, 'Owner', '(123)555-0100', NULL, NULL, '(123)555-0101', '456 17th Street', 'Seattle', 'WA', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (18, 'Company R', 'Autier Miconi', 'Catherine', NULL, 'Purchasing Representative', '(123)555-0100', NULL, NULL, '(123)555-0101', '456 18th Street', 'Boston', 'MA', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (19, 'Company S', 'Eggerer', 'Alexander', NULL, 'Accounting Assistant', '(123)555-0100', NULL, NULL, '(123)555-0101', '789 19th Street', 'Los Angelas', 'CA', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (20, 'Company T', 'Li', 'George', NULL, 'Purchasing Manager', '(123)555-0100', NULL, NULL, '(123)555-0101', '789 20th Street', 'New York', 'NY', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (21, 'Company U', 'Tham', 'Bernard', NULL, 'Accounting Manager', '(123)555-0100', NULL, NULL, '(123)555-0101', '789 21th Street', 'Minneapolis', 'MN', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (22, 'Company V', 'Ramos', 'Luciana', NULL, 'Purchasing Assistant', '(123)555-0100', NULL, NULL, '(123)555-0101', '789 22th Street', 'Milwaukee', 'WI', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (23, 'Company W', 'Entin', 'Michael', NULL, 'Purchasing Manager', '(123)555-0100', NULL, NULL, '(123)555-0101', '789 23th Street', 'Portland', 'OR', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (24, 'Company X', 'Hasselberg', 'Jonas', NULL, 'Owner', '(123)555-0100', NULL, NULL, '(123)555-0101', '789 24th Street', 'Salt Lake City', 'UT', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (25, 'Company Y', 'Rodman', 'John', NULL, 'Purchasing Manager', '(123)555-0100', NULL, NULL, '(123)555-0101', '789 25th Street', 'Chicago', 'IL', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (26, 'Company Z', 'Liu', 'Run', NULL, 'Accounting Assistant', '(123)555-0100', NULL, NULL, '(123)555-0101', '789 26th Street', 'Miami', 'FL', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (27, 'Company AA', 'Toh', 'Karen', NULL, 'Purchasing Manager', '(123)555-0100', NULL, NULL, '(123)555-0101', '789 27th Street', 'Las Vegas', 'NV', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (28, 'Company BB', 'Raghav', 'Amritansh', NULL, 'Purchasing Manager', '(123)555-0100', NULL, NULL, '(123)555-0101', '789 28th Street', 'Memphis', 'TN', '99999', 'USA', NULL, NULL, '');
// INSERT INTO 'customers' ('id', 'company', 'last_name', 'first_name', 'email_address', 'job_title', 'business_phone', 'home_phone', 'mobile_phone', 'fax_number', 'address', 'city', 'state_province', 'zip_postal_code', 'country_region', 'web_page', 'notes', 'attachments') VALUES (29, 'Company CC', 'Lee', 'Soo Jung', NULL, 'Purchasing Manager', '(123)555-0100', NULL, NULL, '(123)555-0101', '789 29th Street', 'Denver', 'CO', '99999', 'USA', NULL, NULL, '');
