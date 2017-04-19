/**
 * Created by kevindeheer on 29-12-16.
 */
Meteor.publish('files.images.all', () => TourImages.find().cursor);
