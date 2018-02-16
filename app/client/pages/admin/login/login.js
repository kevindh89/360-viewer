Template.login.events({
    'submit .login-form': event => {
        event.preventDefault();
        const username = $('#vw-uname').val();
        const password = $('#vw-pwd').val();

        $('#login-form').fadeOut(250, () => {
            Meteor.loginWithPassword(username, password, error => {
                if (error !== undefined) {
                    $('#login-form').fadeIn(250, () => {
                        $('#login-form')
                            .animate({ marginLeft: '+=50' }, 50)
                            .animate({ marginLeft: '-=50' }, 50)
                            .animate({ marginLeft: '-=50' }, 50)
                            .animate({ marginLeft: '+=50' }, 50)
                        ;
                        toastr.error('Login failed');
                    });
                    return;
                }

                InitAdminLayout();
            });
        });
    }
});
