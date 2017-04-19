/**
 * Created by kevindeheer on 25-12-16.
 */
Meteor.publish('tours', () => Tours.find({}));

Meteor.publish('tour', id => Tours.find({
    _id: id
}));
