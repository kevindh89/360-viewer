/**
 * Created by kevindeheer on 12-09-16.
 */
Template.editClientForm.events({
    'click input#editClientButton': evt => {
        evt.preventDefault();

        const username = document.getElementById('username').value;
        const slug = document.getElementById('slug').value;
        Meteor.call('editClient', Template.instance().data._id, username, slug, err => {
            if (err) {
                return err;
            }
            toastr.success('Successfully updated client');
            return 'Successfullly updated client';
        });
        Router.go('clientOverview');
    }
});
