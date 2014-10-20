/*jslint browser:true*/
/*global describe, beforeEach, it, require*/
(function (root) {
	'use strict';

	var assert = require('assert');

	describe('yeoman-generator-requirejs generator', function () {
		it('can be imported without blowing up', function () {
			var app = require('../app');
			assert(app !== undefined);
		});
	});
}());