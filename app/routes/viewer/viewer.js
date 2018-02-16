Router.route('home', {
    path: '/',
    template: 'main',
    waitOn() {
        let client = 'v3n';
        // TODO: Replace hardcoded url with a neat solution
        if (window.location.host === '360.gkvdenhaag.nl') {
            client = 'gkv';
        }

        return [
            Meteor.subscribe('clientForSlug', client),
            Meteor.subscribe('scenesForClient', client)
        ];
    },
    data() {
        return Clients.findOne();
    }
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
