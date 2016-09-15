Template.adminMenu.helpers({
    isRoute(route) {
        return Router.current().route.getName() === route;
    }
});
