Meteor.publish('tours', () => Tours.find({}));

Meteor.publish('tour', id => Tours.find({
    _id: id
}));
