'use strict';
module.exports = function(app) {
  var users = require('../controllers/usersController');

  app.route('/users')
    //.get(users.list_all_users)
    .post(users.add_new_user);


  app.route('/users/auth')
    .post(users.auth_a_user)
    //.put(users.update_a_user)
    //.delete(users.delete_a_user);

};
