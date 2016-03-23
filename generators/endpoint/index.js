var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
  // note: arguments and options should be defined in the constructor.
  constructor: function() {
    generators.Base.apply(this, arguments);

    // This makes `appname` a required argument.
    this.argument('endpointname', {
      type: String,
      required: true
    });
    // And you can then access it later on this way; e.g. CamelCased
    this.endpointname = _.camelCase(this.endpointname);
  },
  endpointJson: function endpointJson() {
    var obj = this.fs.readJSON(this.templatePath('endpoint.json'));
    obj.name = this.endpointname;
    this.fs.writeJSON(this.destinationPath('server/api/' + this.endpointname + '/endpoint.json'), obj);
  },
  endpointFiles: function endpointFiles() {
    this.fs.copy(
      this.templatePath('endpoint.model.js'),
      this.destinationPath('server/api/' + this.endpointname + '/' + this.endpointname + '.model.js')
    );
    this.fs.copy(
      this.templatePath('endpoint.restify.js'),
      this.destinationPath('server/api/' + this.endpointname + '/' + this.endpointname + '.restify.js')
    );
  }
});
