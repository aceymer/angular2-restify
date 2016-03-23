/*jshint esversion: 6 */
'use strict';
var mongoose = require('mongoose');
var express = require('express');
var modelInfo = require('./endpoint.json');
var theModel = require('./' + modelInfo.name + '.model');
var restify = require('express-restify-mongoose');

export default function(router) {

  restify.serve(router, theModel.default);
}
