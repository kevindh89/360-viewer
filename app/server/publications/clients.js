Meteor.publish('clients', () => {
    return Clients.find({});
});

Meteor.publish('clientForSlug', (slug) => {
    return Clients.find({slug: slug});
});

Meteor.publish('clientForHost', (host) => {
    return Clients.find({host: host});
});
