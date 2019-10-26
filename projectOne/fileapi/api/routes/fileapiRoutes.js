'use strict';
module.exports = function(app) {
  var fileapi = require('../controllers/fileapiController');

  // todoList Routes
  app.route('/fileapi')
    .get(fileapi.list_all_files)
    .post(fileapi.upload_an_object)

  app.route('/fileapi/:fileKey')
    .get(fileapi.get_object)
  //  .put(fileapi.upload_a_file)
    .delete(fileapi.delete_an_object);
};
