/**
 * Created by kevindeheer on 25-12-16.
 */
Template.manageTour.onCreated(function() {
    const template = Template.instance();
    const uploadForm = new UploadForm();

    uploadForm.addUploadSuccessCallback((file) => {
        toastr.success('File "' + file.name + '" successfully uploaded');
        Meteor.call('addTourObject', template.data._id, file._id);
        $('#closeUpload').click();
    });

    template.uploadFormData = uploadForm;
});

Template.manageTour.helpers({
    tourObjects() {
        return Template.instance().data.tourObjects ? Template.instance().data.tourObjects : [];
    },
    uploadFormData() {
        return Template.instance().uploadFormData;
    },
    getImage(tourImageId) {
        return TourImages.findOne({_id: tourImageId}) !== undefined ? TourImages.findOne({_id: tourImageId}).link() : '';
    }
});

Template.manageTour.events({
    'click .delete-btn': function() {
        Meteor.call('removeTourObject', Template.instance().data._id, this.id, function(error, result) {
            if (error) {
                toastr.error('Deleting tour object failed');
                return;
            }
            toastr.success('Tour object deleted');
        });
    }
});
