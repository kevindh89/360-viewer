/**
 * Created by kevindeheer on 12-09-16.
 */
Template.editClientForm.events({
    'click input#editClientButton': function(evt) {
        evt.preventDefault();

        const username = document.getElementById('username').value;
        const slug = document.getElementById('slug').value;
        Meteor.call('editClient', Template.instance().data._id, username, slug, (err, result) => {
            if (err) {
                return err;
            }
            toastr.success('Successfully updated client');
        });
        Router.go('clientOverview');
    }
});
