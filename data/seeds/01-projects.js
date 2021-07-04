exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      name: 'Complete Node.js and Express Challenge',
      description:
        'Build and Awesome API Using Node.js and Express to Manage Projects and Actions GTD Style!',
    },
    {
      name: 'Create front end for Node.js and Express Challenge',
      description:
        'Build a visual representation of the data received from the endpoints in the api',
    }
  ]);
};
