Router.route('viewer', {
    path: '/',
    template: 'main',
    waitOn: function() {
        return [
            Meteor.subscribe('clientForHost', window.location.hostname),
            Meteor.subscribe('galleryObjectsForHost', window.location.hostname)
        ];
    }
});

Router.route('clientViewer', {
    path: '/:slug',
    template: 'main',
    waitOn: function() {
        return [
            Meteor.subscribe('clientForSlug', this.params.slug),
            Meteor.subscribe('galleryObjectsForClient', this.params.slug)
        ];
    }
});
