/**
 * Created by kevindeheer on 25-12-16.
 */
Template.manageTour.helpers({
    tourObjects() {
        return Template.instance().data.tourObjects ? Template.instance().data.tourObjects : [];
    }
});

Template.manageTour.events({
    'click .delete-btn': function(e) {
        Meteor.call('removeTourObject', Template.instance().data._id, this.id, function(error, result) {
            if (error) {
                toastr.error('Deleting tour object failed');
                return;
            }
            toastr.success('Tour object deleted');
        });
    }
});
