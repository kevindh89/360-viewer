/**
 * Created by kevindeheer on 27-08-16.
 */
Meteor.publish('galleryObjects', clientId => {
    return GalleryObjects.find({
        clientId: clientId
    });
});
