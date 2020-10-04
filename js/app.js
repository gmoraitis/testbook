// site/js/app.js

var app = app || {};

$(function () {
    var books = [
        {
            title: 'JavaScript: The Good Parts', author: 'Douglas Crockford'
        },
        {
            title: 'The Little Book on CoffeeScript', author: 'Alex MacCaw'
        }
    ];
    new app.LibraryView(books);
});
