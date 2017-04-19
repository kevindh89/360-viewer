/**
 * Created by kevindeheer on 29-12-16.
 */
Template.uploadForm.onCreated(() => {
    this.currentUpload = new ReactiveVar(false);
});

Template.uploadForm.helpers({
    currentUpload() {
        return Template.instance().currentUpload.get();
    },
});

Template.uploadForm.events({
    'change #fileInput': (event, template) => {
        template.data.uploadForm.handleChangeFileInput(event, template);
    },
});
