/**
 * Created by kevindeheer on 27-08-16.
 */
/**
 * Get the gallery objects by the client host.
 * The application can be ran on a specific domain or subdomain, on basis of which the correct client is shown.
 */
Meteor.publish('scenesForHost', host => {
    const client = Clients.findOne({host: host});

    if (!client) {
        console.error('Client not found for host: ' + host);
        return;
    }

    return Scenes.find({
        clientId: client._id
    });
});

/**
 * Get gallery objects by the client slug (short identifier used in url).
 */
Meteor.publishComposite('scenesForClient', function(slug) {
    return {
        find: () => {
            const client = Clients.findOne({slug: slug});

            if (!client) {
                console.error('Client not found for slug: ' + slug);
                return;
            }

            return Scenes.find({
                clientId: client._id
            });
        },
        children: [
            {
                find: (scene) => {
                    return HyperlinkObjects.find({
                        sceneId: scene._id
                    });
                }
            }
        ]
    }
});
