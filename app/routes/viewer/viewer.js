Router.route('/', function homeRoute() {
    // TODO: Replace hardcoded url with a neat solution
    if (window.location.host === '360.gkvdenhaag.nl') {
        this.redirect('/gkv');
    }

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
