Meteor.publish('clients', () => Clients.find({}));

Meteor.publish('clientForSlug', slug => Clients.find({ slug }));

Meteor.publish('clientForHost', host => Clients.find({ host }));

Meteor.publish('clientForTour', tourId => {
    const tour = Tours.findOne({ _id: tourId });
    return Clients.find({ _id: tour.clientId });
});
