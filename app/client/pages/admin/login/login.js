Template.login.events({
    'submit .login-form': function(event) {
        event.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();

        Meteor.loginWithPassword(username, password, function(error) {
            InitAdminLayout();
        });
    }
});