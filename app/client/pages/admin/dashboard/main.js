Template.mainDashboard.helpers({
    username: () => {
        return Meteor.user().username;
    }
});
