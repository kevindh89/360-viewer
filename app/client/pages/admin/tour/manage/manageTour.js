/**
 * Created by kevindeheer on 25-12-16.
 */
Template.manageTour.helpers({
    tourObjects() {
        return Template.instance().data.tourObjects ? Template.instance().data.tourObjects : [];
    }
});
