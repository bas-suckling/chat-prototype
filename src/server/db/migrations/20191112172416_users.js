
exports.up = function (knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id')
        table.string('username')
        table.string('hash')
    });
};

exports.down = function (knex) {
    knex.schema.dropTable('users')
};