Template.listTours.helpers({
    tours() {
        return Template.instance().data;
    },
    countTourObjects(tour) {
        return tour.tourObjects ? tour.tourObjects.length : 0;
    }
});
