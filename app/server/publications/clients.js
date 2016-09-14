Meteor.publish('clients', () => {
    return Clients.find({});
});
