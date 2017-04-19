/**
 * Created by kevindeheer on 29-12-16.
 */
Meteor.methods({
    removeTourObject(tourId, tourObjectId) {
        Tours.update({
            _id: tourId,
        }, {
            $pull: {
                tourObjects: {
                    id: tourObjectId,
                },
            },
        });
    },
});
