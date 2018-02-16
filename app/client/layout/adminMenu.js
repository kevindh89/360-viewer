Template.adminMenu.helpers({
    isRoute() {
        for (let i = 0; i < arguments.length; i += 1) {
            if (Router.current().route.getName() === arguments[i]) {
                return true;
            }
        }
        return false;
    }
});

Template.adminMenu.events({
    'click #logoutButton': () => {
        Accounts.logout();
    }
});
