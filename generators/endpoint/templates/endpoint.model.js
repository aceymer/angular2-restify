/*jshint esversion: 6 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    modelInfo = require('./endpoint.json');

var TheSchema = new mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String }
});

export default mongoose.model(modelInfo.name, TheSchema);
