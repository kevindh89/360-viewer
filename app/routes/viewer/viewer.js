Router.route('/', function homeRoute() {
    this.redirect('/v3n');
});

Router.route('clientViewer', {
    path: '/:slug',
    template: 'main',
    waitOn() {
        return [
            Meteor.subscribe('clientForSlug', this.params.slug),
            Meteor.subscribe('scenesForClient', this.params.slug)
        ];
    },
    data() {
        return Clients.findOne();
    }
});
