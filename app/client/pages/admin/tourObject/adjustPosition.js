/**
 * Created by kevindeheer on 01-01-17.
 */
Template.adjustPosition.onCreated(function() {
    console.log(this.data.tourId);
    this.tour = Tours.findOne(this.data.tourId);
    this.tourObject = undefined;

    _.each(this.tour.tourObjects, tourObject => {
        if (tourObject.id === this.data.tourObjectId) {
            this.tourObject = tourObject;
        }
    });
});

Template.adjustPosition.helpers({
    getImage: function() {
        return this.tourObject !== undefined ? TourImages.findOne({_id: this.tourObject.file360Image}).link() : '';
    }
})