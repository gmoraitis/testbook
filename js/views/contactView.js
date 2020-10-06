
var app = app || {};

app.ContactView = Backbone.View.extend({
    tagName: 'div',
    className: 'mr-3',
    template: _.template($('#contactTemplate').html()),
    render: function () {
        // tmpl is a function that takes a JSON object and returns html
        // this.el is what we defined in tagName. use $el to get access 
        // to jQuery html() function
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        'click .delete': 'deleteContact'
    },
    deleteContact: function () { // Delete model
        this.model.destroy();
        // Delete view
        this.remove();
    },
  
});