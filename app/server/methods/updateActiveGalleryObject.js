/**
 * Created by kevindeheer on 02-02-17.
 */
Meteor.methods({
    'updateActiveScene'(clientId, objectId) {
        Clients.update({_id: clientId}, {
            $set: {
                activeScene: objectId
            }
        });
    }
});
