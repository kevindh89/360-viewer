Router.route('editClient', {
    path: '/admin/edit-client/:id',
    layoutTemplate: 'adminLayout',
    waitOn() {
        return [
            Meteor.subscribe('clients'),
        ];
    },
    data() {
        return Clients.findOne({
            _id: this.params.id,
        });
    },
});
