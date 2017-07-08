Meteor.publish('clients', () => Clients.find({}));

Meteor.publish('clientForSlug', slug => Clients.find({ slug }));
