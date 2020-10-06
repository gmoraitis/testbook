// site/js/models/contact.js

var app = app || {};// What does this means?

app.Contact = Backbone.Model.extend({
    defaults: {
        id: null,
        avatar: null,
        name: null,
        email: null,
        tel: null,
        info:''
      },
    initialize: function() {
		this.set('avatar', _.random(1, 5) + '.jpg');
	  }
});