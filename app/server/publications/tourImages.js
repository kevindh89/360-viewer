/**
 * Created by kevindeheer on 29-12-16.
 */
Meteor.publish('files.images.all', function () {
    return TourImages.find().cursor;
});