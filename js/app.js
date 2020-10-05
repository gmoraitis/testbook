// site/js/app.js

var app = app || {};

$(function () {
    var persons = [
        {
           
            name: 'George Moraitis', 
            email: 'george@gmail.com',
            tel:'+41 23 233 24 23',
            avatar:'',
            info:'Cras sit amet nibh liberoin gravida nulla Nulla vel metus scelerisque ante sollicitudin Cras purus odio vestibulum in vulputate at tempus viverra turpisFusce condimentum nunc ac nisi vulputate fringillDonec lacinia congue felis in faucibus'
        },
        {
            
            name: 'Nick Mor', 
            email: 'mor@gmail.com',
            tel:'+41 23 233 24 23',
            avatar:'',
            info:'Cras sit amet nibh liberoin gravida nulla Nulla vel metus scelerisque ante sollicitudin Cras purus odio vestibulum in vulputate at tempus viverra turpisFusce condimentum nunc ac nisi vulputate fringillDonec lacinia congue felis in faucibus'
        }
    ];
    new app.ContactsView(persons);
});
