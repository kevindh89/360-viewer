Meteor.publish('clients', () => {
    return Clients.find({});
});

Meteor.publish('clientForSlug', (slug) => {
    return Clients.find({slug: slug});
});

Meteor.publish('clientForHost', (host) => {
    return Clients.find({host: host});
});

Meteor.publish('clientForTour', (tourId) => {
    const tour = Tours.findOne({_id: tourId});
    return Clients.find({_id: tour.clientId});
});
