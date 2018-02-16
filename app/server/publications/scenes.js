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
        },
        {
            find: scene => TextObjects.find({
                sceneId: scene._id
            })
        }
    ]
}));
