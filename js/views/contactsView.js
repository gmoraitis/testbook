// site/js/views/library.js

var app = app || {};

app.ContactsView = Backbone.View.extend({
    el: '#contact',

    initialize: function (initialContacts) {
        this.collection = new app.Contacts(initialContacts);
        this.listenTo(this.collection, 'add', this.renderContact);
        this.render();
    },
    events: {
        'click #add': 'addContact'
    },
    
    addContact: function (e) {

     
        e.preventDefault();
        var formData = {};
        $('#addContact div').children('input').each(function (i, el) {
            if ($(el).val() != '') {
                formData[el.id] = $(el).val();
            }
        });
        this.collection.add(new app.Contact(formData));
    },
    // render library by rendering each book in its collection
    render: function () {
        this.collection.each(function (item) {
            this.renderContact(item);
        }, this);
    },
    // render a book by creating a BookView and appending the 
    // element it renders to the library's element 
    renderContact:
        function (item) {
            var contactView = new app.ContactView({
                model: item
            });
            this.$el.append(contactView.render().el);
           
        },
});




