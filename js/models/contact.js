// site/js/models/book.js

var app = app || {};//?????

app.Contact = Backbone.Model.extend({
    defaults: {
        id: null,
        avatar: null,
        name: null,
        email: null,
        tel: null
    },
    initialize: function() {
		this.set('avatar', _.random(1, 5) + '.jpg');
	  }
});