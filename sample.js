// There is no such thing as a private or public variable in JavaScript. It is all just variables
// in different scopes. This shows how to mimic private, public, and static variables using closures.

// Class with a private and public variable
var MyClass = function () {
	"use strict";
	
	var myPrivate = "Private variable";

	this.myPublic = "Public variable";

	this.getMyPrivate = function getMyPrivate() {
		return myPrivate;
	};

	this.setMyPrivate = function setMyPrivate(value) {
		myPrivate = value;
	};
};

// Require.js module with a private, public, and static variable
define([], function () {
	"use strict";

	var myStatic = "Static variable";

	return function () {
		var myPrivate = "Private variable";

		this.myPublic = "Public variable";

		this.getMyPrivate = function getMyPrivate() {
			return myPrivate;
		};

		this.setMyPrivate = function setMyPrivate(value) {
			myPrivate = value;
		};

		this.getMyStatic = function getMyStatic() {
			return myStatic();
		};

		this.setMyStatic = function setMyStatic(value) {
			myStatic = value;
		};
	};
});

// Backbone.js private variables
var MyView = Backbone.View.extend({
	"use strict";
	
	/**
	 * Initialize view.
	 * @param options Options are added to Backbone.View.options.
	 */
	initialize: function (options) {
		var myPrivate = "Private variable";

		this.myPublic = "Public variable";

		this.getPrivate = function getPrivate() {
			return myPrivate;
		};

		this.setPrivate = function setPrivate(value) {
			myPrivate = value;
		};
	},

	myPublic2: "Public variable 2"
});
