Meteor.methods({
    createClient: function(username, slug) {
        Clients.insert({
            username: username,
            slug: slug
        });

        return 'Successfully created client: "' + username + '"';
    }
});
