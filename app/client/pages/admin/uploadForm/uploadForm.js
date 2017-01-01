/**
 * Created by kevindeheer on 29-12-16.
 */
Template.uploadForm.onCreated(function () {
    this.currentUpload = new ReactiveVar(false);
});

Template.uploadForm.helpers({
    currentUpload: function () {
        return Template.instance().currentUpload.get();
    }
});

Template.uploadForm.events({
    'change #fileInput': function (event, template) {
        template.data.uploadForm.handleChangeFileInput(event, template);
    }
});
