/**
 * Created by kevindeheer on 02-02-17.
 */
Meteor.methods({
    'updateActiveGalleryObject'(clientId, objectId) {
        Clients.update({_id: clientId}, {
            $set: {
                activeGalleryObject: objectId
            }
        });
    }
});
