/**
 * The first file to be loaded
 *
 */

// Configure RequireJs
requirejs.config({
	baseUrl: "assets/js",
	paths: {
		jquery: [
			'//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
			//if the googleapis fail load the 2nd param
			'lib/jquery.min'
		]
	}

});