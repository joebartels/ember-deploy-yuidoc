/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-deploy-yuidoc',

  build: function() {
    return yuiDocTask.build();
  },

  update: function() {
    // upload docs
  }

};
