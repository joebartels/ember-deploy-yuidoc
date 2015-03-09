'use strict';

var require DeployYuiDoc = require('./lib/doc-adapter')

function DeployYuiDoc() {
  this.name = 'ember-deploy-yuidoc';
  this.type = 'ember-deploy-addon';

  this.adapters = {
    build: {
      'yui-doc': YuiDocBuilder
    },
    assets: {
      'yui-doc': YuiDocAdapter
    }
  }
}

module.exports = DeployYuiDoc;
