Router.route('viewer', {
    path: '/',
    template: 'main',
    waitOn: function() {
        return [
            Meteor.subscribe('clientForHost', window.location.hostname),
            Meteor.subscribe('scenesForHost', window.location.hostname),
            Meteor.subscribe('hyperlinkObjectsAll')
        ];
    }
});

Router.route('clientViewer', {
    path: '/:slug',
    template: 'main',
    waitOn: function() {
        return [
            Meteor.subscribe('clientForSlug', this.params.slug),
            Meteor.subscribe('scenesForClient', this.params.slug),
            Meteor.subscribe('hyperlinkObjectsAll')
        ];
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
})
