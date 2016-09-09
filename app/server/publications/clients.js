/**
 * Created by kevindeheer on 27-08-16.
 */
Meteor.publish('galleryObjects', host => {
    const client = Clients.findOne({host: host});

    if (!client) {
        console.error('Client not found for host: ' + host);
        return;
    }

    return GalleryObjects.find({
        clientId: client._id
    });
});
