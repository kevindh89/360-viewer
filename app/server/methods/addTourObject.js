/**
 * Created by kevindeheer on 29-12-16.
 */
Meteor.methods({
    addTourObject(tourId, tourImageId) {
        Tours.update({ _id: tourId }, {
            $push: {
                tourObjects: {
                    id: tourImageId,
                    file360Image: tourImageId,
                    previewImage: tourImageId,
                    x: 10,
                    y: 10,
                    z: 10,
                },
            },
        });
    },
});
