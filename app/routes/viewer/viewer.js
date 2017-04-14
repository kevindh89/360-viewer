Router.route('home', {
    path: '/',
    template: 'main',
    waitOn: function() {
        return [
            Meteor.subscribe('clientForSlug', 'v3n'),
            Meteor.subscribe('scenesForClient', 'v3n')
        ];
    }
});

Router.route('clientViewer', {
    path: '/:slug',
    template: 'main',
    waitOn: function() {
        return [
            Meteor.subscribe('clientForSlug', this.params.slug),
            Meteor.subscribe('scenesForClient', this.params.slug)
        ];
    },
    data: function() {
        return Clients.findOne();
    }
});

Router.route('tourViewer', {
    path: '/tour/:id',
    template: 'tour',
    waitOn: function() {
        return [
            Meteor.subscribe('clientForTour', this.params.id),
            Meteor.subscribe('tour', this.params.id),
            Meteor.subscribe('files.images.all')
        ]
    },
    data: function() {
        return Tours.findOne(this.params.id);
    }
});
