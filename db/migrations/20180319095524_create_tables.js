// one migration for correct creation order
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("customers", table => {
      table.increments().primary();
      table.string("company", 50).index();
      table.string("last_name", 50).index();
      table.string("first_name", 50).index();
      table.string("email_address", 50);
      table.string("job_title", 50);
      table.string("business_phone", 25);
      table.string("home_phone", 25);
      table.string("mobile_phone", 25);
      table.string("fax_number", 25);
      table.text("address", "longtext");
      table.string("city", 50).index();
      table.string("state_province", 50).index();
      table.string("zip_postal_code", 15).index();
      table.string("country_region", 50);
      table.text("web_page", "longtext");
      table.text("notes", "longtext");
      table.specificType("attachments", "longblob");
    })
    .createTable("employees", table => {
      table.increments().primary();
      table.string("company", 50).index();
      table.string("last_name", 50).index();
      table.string("first_name", 50).index();
      table.string("email_address", 50);
      table.string("job_title", 50);
      table.string("business_phone", 25);
      table.string("home_phone", 25);
      table.string("mobile_phone", 25);
      table.string("fax_number", 25);
      table.text("address", "longtext");
      table.string("city", 50).index();
      table.string("state_province", 50).index();
      table.string("zip_postal_code", 15).index();
      table.string("country_region", 50);
      table.text("web_page", "longtext");
      table.text("notes", "longtext");
      table.specificType("attachments", "longblob");
    })
    .createTable("privileges", table => {
      table.increments().primary();
      table.string("privilege_name", 50);
    })
    .createTable("employee_privileges", table => {
      table
        .integer("employee_id")
        .unsigned()
        .notNullable();
      table
        .integer("privilege_id")
        .unsigned()
        .notNullable();
      table
        .foreign("employee_id")
        .references("id")
        .inTable("employees");
      table
        .foreign("privilege_id")
        .references("id")
        .inTable("privileges");
    })
    .createTable("inventory_transaction_types", table => {
      table
        .specificType("id", "tinyint")
        .unsigned()
        .notNullable()
        .primary();
      table.string("type_name", 50).notNullable();
    })
    .createTable("shippers", table => {
      table.increments().primary();
      table.string("company", 50).index();
      table.string("last_name", 50).index();
      table.string("first_name", 50).index();
      table.string("email_address", 50);
      table.string("job_title", 50);
      table.string("business_phone", 25);
      table.string("home_phone", 25);
      table.string("mobile_phone", 25);
      table.string("fax_number", 25);
      table.text("address", "longtext");
      table.string("city", 50).index();
      table.string("state_province", 50).index();
      table.string("zip_postal_code", 15).index();
      table.string("country_region", 50);
      table.text("web_page", "longtext");
      table.text("notes", "longtext");
      table.specificType("attachments", "longblob");
    })
    .createTable("orders_tax_status", table => {
      table
        .specificType("id", "tinyint")
        .unsigned()
        .notNullable()
        .primary();
      table.string("tax_status_name", 50).notNullable();
    })
    .createTable("orders_status", table => {
      table
        .specificType("id", "tinyint")
        .unsigned()
        .notNullable()
        .primary();
      table.string("status_name", 50).notNullable();
    })
    .createTable("orders", table => {
      table.increments().primary();
      table
        .integer("employee_id")
        .unsigned()
        .notNullable()
        .index();
      table
        .integer("customer_id")
        .unsigned()
        .notNullable()
        .index();
      table.dateTime("order_date").defaultTo(knex.fn.now());
      table.dateTime("shipped_date");
      table
        .integer("shipper_id")
        .unsigned()
        .notNullable()
        .index();
      table.string("ship_name", 50);
      table.text("ship_address", "longtext");
      table.string("ship_city", 50);
      table.string("ship_state_province", 50);
      table.string("ship_zip_postal_code", 50);
      table.string("ship_country_region", 50);
      table.decimal("shipping_fee", 19, 4).defaultTo("0.0000");
      table.decimal("taxes", 19, 4).defaultTo("0.0000");
      table.string("payment_type", 50);
      table.dateTime("paid_date");
      table.text("notes", "longtext");
      table.specificType("tax_rate", "double");
      table
        .specificType("tax_status_id", "tinyint")
        .unsigned()
        .notNullable()
        .index();
      table
        .specificType("status_id", "tinyint")
        .unsigned()
        .notNullable();
      table
        .foreign("customer_id")
        .references("id")
        .inTable("customers");
      table
        .foreign("employee_id")
        .references("id")
        .inTable("employees");
      table
        .foreign("shipper_id")
        .references("id")
        .inTable("shippers");
      table
        .foreign("tax_status_id")
        .references("id")
        .inTable("orders_tax_status");
      table
        .foreign("status_id")
        .references("id")
        .inTable("orders_status");
    })
    .createTable("products", table => {
      table.text("supplier_ids", "longtext");
      table.increments().primary();
      table.string("product_code", 25).index();
      table.string("product_name", 50);
      table.text("description", "longtext");
      table.decimal("standard_cost", 19, 4).defaultTo("0.0000");
      table.decimal("list_price", 19, 4).defaultTo("0.0000");
      table.integer("reorder_level");
      table.integer("target_level");
      table.string("quantity_per_unit", 50);
      table.boolean("discontinued").defaultTo("0");
      table.integer("minimum_reorder_quantity");
      table.string("category", 50);
      table.specificType("attachments", "longblob");
    })
    .createTable("purchase_order_status", table => {
      table.increments().primary();
      table.string("status", 50);
    })
    .createTable("suppliers", table => {
      table.increments().primary();
      table.string("company", 50).index();
      table.string("last_name", 50).index();
      table.string("first_name", 50).index();
      table.string("email_address", 50);
      table.string("job_title", 50);
      table.string("business_phone", 25);
      table.string("home_phone", 25);
      table.string("mobile_phone", 25);
      table.string("fax_number", 25);
      table.text("address", "longtext");
      table.string("city", 50).index();
      table.string("state_province", 50).index();
      table.string("zip_postal_code", 15).index();
      table.string("country_region", 50);
      table.text("web_page", "longtext");
      table.text("notes", "longtext");
      table.specificType("attachments", "longblob");
    })
    .createTable("purchase_orders", table => {
      table.increments().primary();
      table
        .integer("supplier_id")
        .unsigned()
        .index();
      table
        .integer("created_by")
        .unsigned()
        .index();
      table.dateTime("submitted_date");
      table.dateTime("creation_date").defaultTo(knex.fn.now());
      table
        .integer("status_id")
        .unsigned()
        .defaultTo("0")
        .index();
      table.dateTime("expected_date");
      table.decimal("shipping_fee", 19, 4).defaultTo("0.0000");
      table.decimal("taxes", 19, 4).defaultTo("0.0000");
      table.dateTime("payment_date");
      table.decimal("payment_amount", 19, 4).defaultTo("0.0000");
      table.string("payment_method", 50);
      table.text("notes", "longtext");
      table.integer("approved_by");
      table.dateTime("approved_date");
      table.integer("submitted_by");
      table
        .foreign("created_by")
        .references("id")
        .inTable("employees");
      table
        .foreign("status_id")
        .references("id")
        .inTable("purchase_order_status");
      table
        .foreign("supplier_id")
        .references("id")
        .inTable("suppliers");
    })

    .createTable("inventory_transactions", table => {
      table.increments().primary();
      table
        .specificType("transaction_type", "tinyint")
        .unsigned()
        .notNullable()
        .index();
      table
        .dateTime("transaction_created_date")
        .notNullable()
        .defaultTo(knex.fn.now());
      table
        .dateTime("transaction_modified_date")
        .notNullable()
        .defaultTo(knex.fn.now());
      table
        .integer("product_id")
        .unsigned()
        .notNullable()
        .index();
      table
        .integer("quantity")
        .unsigned()
        .notNullable();
      table
        .integer("purchase_order_id")
        .unsigned()
        .notNullable()
        .index();
      table
        .integer("customer_order_id")
        .unsigned()
        .notNullable()
        .index();
      table.string("comments", 255);
      table
        .foreign("customer_order_id")
        .references("id")
        .inTable("orders");
      table
        .foreign("product_id")
        .references("id")
        .inTable("products");
      table
        .foreign("purchase_order_id")
        .references("id")
        .inTable("purchase_orders");
      table
        .foreign("transaction_type")
        .references("id")
        .inTable("inventory_transaction_types");
    })
    .createTable("invoices", table => {
      table.increments().primary();
      table
        .integer("order_id")
        .unsigned()
        .notNullable()
        .index();
      table
        .dateTime("invoice_date")
        .notNullable()
        .defaultTo(knex.fn.now());
      table.dateTime("due_date");
      table.decimal("tax", 19, 4).defaultTo("0.0000");
      table.decimal("shipping", 19, 4).defaultTo("0.0000");
      table.decimal("amount_due", 19, 4).defaultTo("0.0000");
      table
        .foreign("order_id")
        .references("id")
        .inTable("orders");
    })
    .createTable("order_details_status", table => {
      table.increments().primary();
      table.string("status_name", 50).notNullable();
    })
    .createTable("order_details", table => {
      table.increments().primary();
      table
        .integer("order_id")
        .unsigned()
        .notNullable()
        .index();
      table
        .integer("product_id")
        .unsigned()
        .notNullable()
        .index();
      table.decimal("quantity", 18, 4).defaultTo("0.0000");
      table.decimal("unit_price", 19, 4).defaultTo("0.0000");
      table
        .specificType("discount", "double")
        .notNullable()
        .defaultTo("0.0000");
      table
        .integer("status_id")
        .unsigned()
        .notNullable()
        .index();
      table.dateTime("date_allocated");
      table.integer("purchase_order_id").index();
      table.integer("inventory_id").index();
      table
        .foreign("order_id")
        .references("id")
        .inTable("orders");
      table
        .foreign("product_id")
        .references("id")
        .inTable("products");
      table
        .foreign("status_id")
        .references("id")
        .inTable("order_details_status");
    })
    .createTable("purchase_order_details", table => {
      table.increments().primary();
      table
        .integer("purchase_order_id")
        .unsigned()
        .notNullable()
        .index();
      table
        .integer("product_id")
        .unsigned()
        .index();
      table.decimal("quantity", 18, 4);
      table.decimal("unit_cost", 19, 4);
      table.dateTime("date_received");
      table.boolean("posted_to_inventory").defaultTo("0");
      table
        .integer("inventory_id")
        .unsigned()
        .index();
      table
        .foreign("inventory_id")
        .references("id")
        .inTable("inventory_transactions");
      table
        .foreign("product_id")
        .references("id")
        .inTable("products");
      table
        .foreign("purchase_order_id")
        .references("id")
        .inTable("purchase_orders");
    })
    .createTable("sales_reports", table => {
      table.string("group_by", 50);
      table.string("display", 50);
      table.string("title", 50);
      table.text("filter_row_source", "longtext");
      table.boolean("default").defaultTo("0");
    })
    .createTable("strings", table => {
      table.increments("string_id").primary();
      table.string("string_data", 255);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("strings")
    .dropTableIfExists("sales_reports")
    .table("purchase_order_details", table => {
      table.dropForeign("inventory_id");
      table.dropForeign("product_id");
      table.dropForeign("purchase_order_id");
    })
    .dropTableIfExists("purchase_order_details")
    .table("order_details", table => {
      table.dropForeign("order_id");
      table.dropForeign("product_id");
      table.dropForeign("status_id");
    })
    .dropTableIfExists("order_details")
    .dropTableIfExists("order_details_status")
    .table("invoices", table => {
      table.dropForeign("order_id");
    })
    .dropTableIfExists("invoices")
    .table("inventory_transactions", table => {
      table.dropForeign("customer_order_id");
      table.dropForeign("product_id");
      table.dropForeign("purchase_order_id");
      table.dropForeign("transaction_type");
    })
    .dropTableIfExists("inventory_transactions")
    .table("purchase_orders", table => {
      table.dropForeign("created_by");
      table.dropForeign("status_id");
      table.dropForeign("supplier_id");
    })
    .dropTableIfExists("purchase_orders")
    .dropTableIfExists("suppliers")
    .dropTableIfExists("purchase_order_status")
    .dropTableIfExists("products")
    .table("orders", table => {
      table.dropForeign("customer_id");
      table.dropForeign("employee_id");
      table.dropForeign("shipper_id");
      table.dropForeign("tax_status_id");
      table.dropForeign("status_id");
    })
    .dropTableIfExists("orders")
    .dropTableIfExists("orders_tax_status")
    .dropTableIfExists("orders_status")
    .dropTableIfExists("shippers")
    .dropTableIfExists("inventory_transaction_types")
    .table("employee_privileges", table => {
      table.dropForeign("employee_id");
      table.dropForeign("privilege_id");
    })
    .dropTableIfExists("employee_privileges")
    .dropTableIfExists("privileges")
    .dropTableIfExists("employees")
    .dropTableIfExists("customers");
};
