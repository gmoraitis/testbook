// site/js/collections/library.js

var app = app || {};

app.Contacts = Backbone.Collection.extend({
    model: app.Contact
});