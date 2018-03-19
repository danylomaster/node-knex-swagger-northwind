exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("privileges")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("privileges").insert([
        {
          id: 2,
          privilege_name: "Purchase Approvals"
        }
      ]);
    });
};
