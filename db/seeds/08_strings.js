exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("strings")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("strings").insert([
        {
          string_id: 2,
          string_data: "Northwind Traders"
        },
        {
          string_id: 3,
          string_data: "Cannot remove posted inventory!"
        },
        {
          string_id: 4,
          string_data: "Back ordered product filled for Order #|"
        },
        {
          string_id: 5,
          string_data: "Discounted price below cost!"
        },
        {
          string_id: 6,
          string_data: "Insufficient inventory."
        },
        {
          string_id: 7,
          string_data:
            "Insufficient inventory. Do you want to create a purchase order?"
        },
        {
          string_id: 8,
          string_data:
            "Purchase orders were successfully created for | products"
        },
        {
          string_id: 9,
          string_data:
            "There are no products below their respective reorder levels"
        },
        {
          string_id: 10,
          string_data: "Must specify customer name!"
        },
        {
          string_id: 11,
          string_data:
            "Restocking will generate purchase orders for all products below desired inventory levels.  Do you want to continue?"
        },
        {
          string_id: 12,
          string_data:
            "Cannot create purchase order.  No suppliers listed for specified product"
        },
        {
          string_id: 13,
          string_data: "Discounted price is below cost!"
        },
        {
          string_id: 14,
          string_data: "Do you want to continue?"
        },
        {
          string_id: 15,
          string_data:
            "Order is already invoiced. Do you want to print the invoice?"
        },
        {
          string_id: 16,
          string_data: "Order does not contain any line items"
        },
        {
          string_id: 17,
          string_data:
            "Cannot create invoice!  Inventory has not been allocated for each specified product."
        },
        {
          string_id: 18,
          string_data: "Sorry, there are no sales in the specified time period"
        },
        {
          string_id: 19,
          string_data: "Product successfully restocked."
        },
        {
          string_id: 21,
          string_data:
            "Product does not need restocking! Product is already at desired inventory level."
        },
        {
          string_id: 22,
          string_data: "Product restocking failed!"
        },
        {
          string_id: 23,
          string_data: "Invalid login specified!"
        },
        {
          string_id: 24,
          string_data: "Must first select reported!"
        },
        {
          string_id: 25,
          string_data:
            "Changing supplier will remove purchase line items, continue?"
        },
        {
          string_id: 26,
          string_data:
            "Purchase orders were successfully submitted for | products.  Do you want to view the restocking report?"
        },
        {
          string_id: 27,
          string_data:
            "There was an error attempting to restock inventory levels."
        },
        {
          string_id: 28,
          string_data:
            "| product(s) were successfully restocked.  Do you want to view the restocking report?"
        },
        {
          string_id: 29,
          string_data:
            "You cannot remove purchase line items already posted to inventory!"
        },
        {
          string_id: 30,
          string_data:
            "There was an error removing one or more purchase line items."
        },
        {
          string_id: 31,
          string_data:
            "You cannot modify quantity for purchased product already received or posted to inventory."
        },
        {
          string_id: 32,
          string_data:
            "You cannot modify price for purchased product already received or posted to inventory."
        },
        {
          string_id: 33,
          string_data: "Product has been successfully posted to inventory."
        },
        {
          string_id: 34,
          string_data:
            "Sorry, product cannot be successfully posted to inventory."
        },
        {
          string_id: 35,
          string_data:
            "There are orders with this product on back order.  Would you like to fill them now?"
        },
        {
          string_id: 36,
          string_data:
            "Cannot post product to inventory without specifying received date!"
        },
        {
          string_id: 37,
          string_data: "Do you want to post received product to inventory?"
        },
        {
          string_id: 38,
          string_data: "Initialize purchase, orders, and inventory data?"
        },
        {
          string_id: 39,
          string_data: "Must first specify employee name!"
        },
        {
          string_id: 40,
          string_data: "Specified user must be logged in to approve purchase!"
        },
        {
          string_id: 41,
          string_data:
            "Purchase order must contain completed line items before it can be approved"
        },
        {
          string_id: 42,
          string_data: "Sorry, you do not have permission to approve purchases."
        },
        {
          string_id: 43,
          string_data: "Purchase successfully approved"
        },
        {
          string_id: 44,
          string_data: "Purchase cannot be approved"
        },
        {
          string_id: 45,
          string_data: "Purchase successfully submitted for approval"
        },
        {
          string_id: 46,
          string_data: "Purchase cannot be submitted for approval"
        },
        {
          string_id: 47,
          string_data: "Sorry, purchase order does not contain line items"
        },
        {
          string_id: 48,
          string_data: "Do you want to cancel this order?"
        },
        {
          string_id: 49,
          string_data:
            "Canceling an order will permanently delete the order.  Are you sure you want to cancel?"
        },
        {
          string_id: 100,
          string_data: "Your order was successfully canceled."
        },
        {
          string_id: 101,
          string_data:
            "Cannot cancel an order that has items received and posted to inventory."
        },
        {
          string_id: 102,
          string_data: "There was an error trying to cancel this order."
        },
        {
          string_id: 103,
          string_data: "The invoice for this order has not yet been created."
        },
        {
          string_id: 104,
          string_data:
            "Shipping information is not complete.  Please specify all shipping information and try again."
        },
        {
          string_id: 105,
          string_data: "Cannot mark as shipped.  Order must first be invoiced!"
        },
        {
          string_id: 106,
          string_data: "Cannot cancel an order that has already shipped!"
        },
        {
          string_id: 107,
          string_data: "Must first specify salesperson!"
        },
        {
          string_id: 108,
          string_data: "Order is now marked closed."
        },
        {
          string_id: 109,
          string_data: "Order must first be marked shipped before closing."
        },
        {
          string_id: 110,
          string_data: "Must first specify payment information!"
        },
        {
          string_id: 111,
          string_data:
            "There was an error attempting to restock inventory levels.  | product(s) were successfully restocked."
        },
        {
          string_id: 112,
          string_data: "You must supply a Unit Cost."
        },
        {
          string_id: 113,
          string_data: "Fill back ordered product, Order #|"
        },
        {
          string_id: 114,
          string_data: "Purchase generated based on Order #|"
        }
      ]);
    });
};
