exports.up = knex => knex.schema.createTable("movie_notes", table => {
  table.increments("id");
  table.text("title");
  table.text("description");
  table.integer("rating");
  table.integer("user_id").references("id").inTable("users");

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
}); //método de criar a tabela

exports.down = knex => knex.schema.dropTable("movie_notes"); //método de deletar a tabela