Template.adminMenu.helpers({
    isRoute(route) {
        return Router.current().route.getName() === route;
    }
});

Template.adminMenu.events({
    'click #logoutButton': () => {
        Accounts.logout();
    }
});
