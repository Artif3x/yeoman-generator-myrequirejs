/*jslint browser:true, nomen:true*/
/*global describe, beforeEach, it, require, __dirname*/
(function (root) {
	'use strict';

	var path = require('path'),
		helpers = require('yeoman-generator').test;


	describe('yeoman-generator-myrequirejs generator', function () {
		beforeEach(function (done) {
			helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
				if (err) {
					return done(err);
				}

				this.app = helpers.createGenerator('myrequirejs:app', [
					'../../app'
				]);
				done();
			}.bind(this));
		});

		it('creates expected files', function (done) {
			var expected = [
				// add files you expect to exist here.
				'.jshintrc',
				'.editorconfig'
			];

			helpers.mockPrompt(this.app, {
				'appname': 'test',
				'appdescription': 'an app'
			});

			this.app.run({}, function () {
				helpers.assertFiles(expected);
				done();
			});
		});
	});
}(this));
