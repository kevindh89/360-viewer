/**
 * Created by kevindeheer on 12-09-16.
 */
Template.createClientForm.events({
    'click input#createClientButton': function(evt) {
        evt.preventDefault();

        const username = document.getElementById('username').value;
        const slug = document.getElementById('slug').value;
        Meteor.call('createClient', username, slug, function(err, result) {
            if (err) {
                return err;
            }
            toastr.success('Successfully created a client "' + username + '"');
        });
        Router.go('admin');
    }
});
