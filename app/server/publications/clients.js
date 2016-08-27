/**
 * Created by kevindeheer on 27-08-16.
 */
Meteor.publish('galleryObjects', host => {
    const client = Clients.findOne({host: host});

    return GalleryObjects.find({
        clientId: client._id
    });
});
