Meteor.publish('files.images.all', () => TourImages.find().cursor);
