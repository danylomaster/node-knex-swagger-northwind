exports.up = function(knex, Promise) {
  return knex.schema.createTable("customers", function(table) {
    table.increments();
    table.string("company", 50);
    table.string("last_name", 50);
    table.string("first_name", 50);
    table.string("email_address", 50);
    table.string("job_title", 50);
    table.string("business_phone", 25);
    table.string("home_phone", 25);
    table.string("mobile_phone", 25);
    table.string("fax_number", 25);
    table.text("address", "longtext");
    table.string("city", 50);
    table.string("state_province", 50);
    table.string("zip_postal_code", 15);
    table.string("country_region", 50);
    table.text("web_page", "longtext");
    table.text("notes", "longtext");
    table.specificType("attachments", "longblob");
    table.timestamps(true, true);
    table.index("city");
    table.index("company");
    table.index("first_name");
    table.index("last_name");
    table.index("zip_postal_code");
    table.index("state_province");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("customers");
};

// -- -----------------------------------------------------
// -- Table `northwind`.`customers`
// -- -----------------------------------------------------
// CREATE TABLE IF NOT EXISTS `northwind`.`customers` (
//   `id` INT(11) NOT NULL AUTO_INCREMENT,
//   `company` VARCHAR(50) NULL DEFAULT NULL,
//   `last_name` VARCHAR(50) NULL DEFAULT NULL,
//   `first_name` VARCHAR(50) NULL DEFAULT NULL,
//   `email_address` VARCHAR(50) NULL DEFAULT NULL,
//   `job_title` VARCHAR(50) NULL DEFAULT NULL,
//   `business_phone` VARCHAR(25) NULL DEFAULT NULL,
//   `home_phone` VARCHAR(25) NULL DEFAULT NULL,
//   `mobile_phone` VARCHAR(25) NULL DEFAULT NULL,
//   `fax_number` VARCHAR(25) NULL DEFAULT NULL,
//   `address` LONGTEXT NULL DEFAULT NULL,
//   `city` VARCHAR(50) NULL DEFAULT NULL,
//   `state_province` VARCHAR(50) NULL DEFAULT NULL,
//   `zip_postal_code` VARCHAR(15) NULL DEFAULT NULL,
//   `country_region` VARCHAR(50) NULL DEFAULT NULL,
//   `web_page` LONGTEXT NULL DEFAULT NULL,
//   `notes` LONGTEXT NULL DEFAULT NULL,
//   `attachments` LONGBLOB NULL DEFAULT NULL,
//   PRIMARY KEY (`id`),
//   INDEX `city` (`city` ASC),
//   INDEX `company` (`company` ASC),
//   INDEX `first_name` (`first_name` ASC),
//   INDEX `last_name` (`last_name` ASC),
//   INDEX `zip_postal_code` (`zip_postal_code` ASC),
//   INDEX `state_province` (`state_province` ASC))
// ENGINE = InnoDB
// DEFAULT CHARACTER SET = utf8;
