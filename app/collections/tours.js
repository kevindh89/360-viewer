/**
 * Created by kevindeheer on 25-12-16.
 */
Tour = function(doc) {
    _.extend(this, doc);
};

/**
 * Functions for instances of the Client class can be defined here.
 * @type {{constructor: Function}}
 */
Tour.prototype = {
    constructor: Tour,

    dummy: function() {
        // 'this' is the Tour object.
        return true;
    }
};

/**
 * Initialize the collection.
 * The transform function converts all objects into instances of the "Tour" class.
 */
Tours = new Mongo.Collection("tours", {
    transform: doc => {
        return new Tour(doc);
    }
});

/**
 * @type {SimpleSchema}
 */
TourObjectSchema = new SimpleSchema({
    x: {
        type: Number
    },
    y: {
        type: Number
    },
    z: {
        type: Number
    },
    file360Image: {
        type: String,
        optional: true
    }
});

/**
 * The schema defines the structure of the objects within the collection.
 *
 * @type {SimpleSchema}
 */
TourSchema = new SimpleSchema({
    clientId: {
        type: String
    },
    name: {
        type: String
    },
    tourObjects: {
        type: [TourObjectSchema]
    }
});

Tours.attachSchema(TourSchema);
