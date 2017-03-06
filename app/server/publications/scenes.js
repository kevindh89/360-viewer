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
Meteor.publish('scenesForClient', slug => {
    const client = Clients.findOne({slug: slug});

    if (!client) {
        console.error('Client not found for slug: ' + slug);
        return;
    }

    return Scenes.find({
        clientId: client._id
    });
});

// TODO: coding in an airplane without publishComposite package atm. Should be fixed later on.
Meteor.publish('hyperlinkObjectsAll', () => {
    return HyperlinkObjects.find();
});
