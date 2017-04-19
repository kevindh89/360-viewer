/**
 * Created by kevindeheer on 12-09-16.
 */
Template.createClientForm.events({
    'click input#createClientButton': evt => {
        evt.preventDefault();

        const username = document.getElementById('username').value;
        const slug = document.getElementById('slug').value;
        Meteor.call('createClient', username, slug, err => {
            if (err) {
                return err;
            }
            toastr.success(`Successfully created a client "${username}"`);
            return `Successfully created a client "${username}"`;
        });
        Router.go('mainDashboard');
    },
});
