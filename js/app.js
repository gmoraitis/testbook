// site/js/app.js

var app = app || {};

$(function () {
    var persons = [
        {
            name: 'George Moraitis', 
            email: 'george@gmail.com',
            tel:'+41 23 233 24 23',
            avatar:''
        },
        {
            name: 'Nick Mor', 
            email: 'mor@gmail.com',
            tel:'+41 23 233 24 23',
            avatar:''
        }
    ];
    new app.ContactsView(persons);
});
