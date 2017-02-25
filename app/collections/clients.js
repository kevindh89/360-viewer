/**
 * Created by kevindeheer on 27-08-16.
 */
Client = function(doc) {
    _.extend(this, doc);
};

/**
 * Functions for instances of the Client class can be defined here.
 * @type {{constructor: Function}}
 */
Client.prototype = {
    constructor: Client,

    dummy: function() {
        // 'this' is the Client object.
        return true;
    }
};

/**
 * Initialize the collection.
 * The transform function converts all objects into instances of the "Client" class.
 */
Clients = new Mongo.Collection("clients", {
    transform: doc => {
        return new Client(doc);
    }
});

/**
 * The schema defines the structure of the objects within the collection.
 *
 * @type {SimpleSchema}
 */
ClientSchema = new SimpleSchema({
    username: {
        type: String
    },
    slug: {
        type: String
    },
    host: {
        type: String,
        optional: true
    },
    activeScene: {
        type: String,
        optional: true
    }
});

Clients.attachSchema(ClientSchema);
