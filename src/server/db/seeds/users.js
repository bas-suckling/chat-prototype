
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'secretperson01', hash: 'qwerty123'},
        {id: 2, username: 'anonuser', hash: 'securehash'},
        {id: 3, username: 'FreeHongKong', hash: 'freeTibet'}
      ]);
    });
};