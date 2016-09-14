Router.route('clientOverview', {
    path: '/client-overview',
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
