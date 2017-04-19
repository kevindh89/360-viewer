/**
 * Get the gallery objects by the client host.
 * The application can be ran on a specific domain or subdomain, on basis of which the correct
 * client is shown.
 */
Meteor.publish('scenesForHost', host => {
    const client = Clients.findOne({ host });

    if (!client) {
        // console.error(`Client not found for host: ${host}`);
        return undefined;
    }

    return Scenes.find({
        clientId: client._id
    });
});

/**
 * Get gallery objects by the client slug (short identifier used in url).
 */
Meteor.publishComposite('scenesForClient', slug => ({
    find: () => {
        const client = Clients.findOne({ slug });

        if (!client) {
            // console.error(`Client not found for slug: ${slug}`);
            return undefined;
        }

        return Scenes.find({
            clientId: client._id
        });
    },
    children: [
        {
            find: scene => HyperlinkObjects.find({
                sceneId: scene._id
            })
        }
    ]
}));
