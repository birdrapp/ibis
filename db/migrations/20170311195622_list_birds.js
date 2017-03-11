
exports.up = async (knex, Promise) => {
  return await knex.schema.createTable('list_birds', (table) => {
    table.uuid('list_id').notNullable();
    table.uuid('bird_id').notNullable();
    table.unique(['list_id', 'bird_id']);
    table.string('local_name');
    table.timestamps(true, true);
  });
};

exports.down = async (knex, Promise) => {
  await knex.schema.dropTable('list_birds');
};
