Meteor.methods({
    createClient(username, slug) {
        Clients.insert({
            username,
            slug
        });

        return `Successfully created client: "${username}"`;
    }
});
