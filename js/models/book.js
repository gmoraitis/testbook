// site/js/models/book.js

var app = app || {};//?????

app.Book = Backbone.Model.extend({
    defaults: {
        coverImage:"img/",
        title: 'No title',
        author: 'Unknown'
    }
});