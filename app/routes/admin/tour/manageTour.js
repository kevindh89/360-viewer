Router.route('manageTour', {
    path: '/admin/manage-tour/:id',
    layoutTemplate: 'adminLayout',
    waitOn() {
        return [
            Meteor.subscribe('tour', this.params.id)
        ];
    },
    data() {
        return Tours.findOne({
            _id: this.params.id
        });
    }
});
