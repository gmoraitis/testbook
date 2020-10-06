
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
        //Maximum number of contacts is 3. Change the maxContacts = 10 to add until 10 contacts. 
        var maxContacts = 3;

        if (this.collection.size() < maxContacts) {
            e.preventDefault();
            var formData = {};
            $('#addContact div').children('input').each(function (i, el) {

                if ($(el).val() != '') {
                    formData[el.id] = $(el).val();
                }
                //VALIDATION NOT WORKING !!
                // var pattern = /^\+41(\s*\d\s*){9}$/
                // if (!pattern.test(formData[?])) {
                //     alert("Error in telephone number.Please type a 9-digit number following exactly this pattern '+41 44 123 12 34' ")
                // }
                // else {
                // } 
            });
            this.collection.add(new app.Contact(formData));
            console.log(this.collection.size());
        }
        else {
            alert("Maximum number of contacts is 3")
        }
    },

    // render an address book by rendering each contact in its collection
    render: function () {
        this.collection.each(function (item) {
            this.renderContact(item);
        },
            this);
    },

    // render a conatct by creating a ContactView and appending the 
    // element it renders to the address book element 
    renderContact:
        function (item) {
            var contactView = new app.ContactView({
                model: item
            });
            this.$el.append(contactView.render().el);
        },
});




