Router.route('viewer', {
    path: '/',
    template: 'main',
    waitOn: function() {
        return [
            Meteor.subscribe('galleryObjectsForHost', window.location.hostname)
        ];
    }
});

Router.route('clientViewer', {
    path: '/:slug',
    template: 'main',
    waitOn: function() {
        return [
            Meteor.subscribe('galleryObjectsForClient', this.params.slug)
        ];
    }
});
