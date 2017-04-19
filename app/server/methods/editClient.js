Meteor.methods({
    editClient(id, username, slug) {
        Clients.update({ _id: id }, {
            $set: {
                username,
                slug,
            },
        });

        return `Successfully edited client with id: "${id}"`;
    },
});
