// site/js/app.js

var app = app || {};

$(function () {
    var books = [
        {
            title: 'JavaScript: The Good Parts', author: 'Douglas Crockford',
            releaseDate: '2008', keywords: 'JavaScript Programming'
        },
        {
            title: 'The Little Book on CoffeeScript', author: 'Alex MacCaw',
            releaseDate: '2012', keywords: 'CoffeeScript Programming'
        }
    ];
    new app.LibraryView(books);
});
