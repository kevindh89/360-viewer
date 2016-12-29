/**
 * Created by kevindeheer on 25-12-16.
 */
Meteor.publish('tours', () => {
    return Tours.find({});
});

Meteor.publish('tour', (id) => {
    return Tours.find({
        _id: id
    });
});
