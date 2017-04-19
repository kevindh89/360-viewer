Router.route('listTours', {
    path: '/admin/manage-tours',
    layoutTemplate: 'adminLayout',
    waitOn() {
        return [
            Meteor.subscribe('tours'),
        ];
    },
    data() {
        return Tours.find({});
    },
});
