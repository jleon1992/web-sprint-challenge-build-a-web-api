exports.seed = function(knex) {
  return knex('actions').insert([
    {
      project_id: 1,
      description: 'Fork and Clone Repository',
      notes:
        'Repo URL: https://github.com/LambdaSchool/Sprint-Challenge-Node-Express',
    },
    {
      project_id: 1,
      description: 'Install Dependencies',
      notes: 'Remember to cd into the folder where the Project was cloned',
    },
    {
      project_id: 1,
      description: 'Design and Build API Endpoints',
      notes: 'This is where the magic happens!',
    },
    {
      project_id: 2,
      description: 'Figure out the exact data that must be displayed with react',
      notes:
        'Using Postman I will get a better understanding of the data I am working with',
    },
    {
      project_id: 2,
      description: 'Decided Which Components to create',
      notes: 'May require some trial and error',
    },
    {
      project_id: 2,
      description: 'Add more capabilities than just retrieving data and displaying it',
      notes: 'This decision will largely be based on capability and amount of time',
    },
  ]);
};
