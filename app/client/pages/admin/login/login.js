Template.login.events({
    'submit .login-form': function(event) {
        event.preventDefault();
        const username = $('#vw-uname').val();
        const password = $('#vw-pwd').val();

        $('#login-form').fadeOut(250, () => {
            Meteor.loginWithPassword(username, password, function(error) {
                InitAdminLayout();
            });
        });
    }
});