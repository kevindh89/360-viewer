Meteor.methods({
    editClient: function(id, username, slug) {
        Clients.update({_id: id}, {
            $set: {
                username: username,
                slug: slug
            }
        });

        return 'Successfully edited client with id: "' + id + '"';
    }
});
