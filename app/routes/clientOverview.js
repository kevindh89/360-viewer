Router.route('clientOverview', {
    path: '/admin/client-overview',
    layoutTemplate: 'adminLayout',
    waitOn() {
        return [
            Meteor.subscribe('clients')
        ];
    },
    data() {
        return {
            clients: Clients.find({})
        };
    }
});
