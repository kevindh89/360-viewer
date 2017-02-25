/**
 * Created by kevindeheer on 18-02-17.
 */
HyperlinkObject = class HyperlinkObject {
    constructor(doc) {
        _.extend(this, doc);
    }
};

EventSchema = new SimpleSchema({
    type: {
        type: String // one of Events.types()
    }
});

HyperlinkObjectSchema = new SimpleSchema({
    position: {
        type: Object
    },
    'position.x': {
        type: Number
    },
    'position.y': {
        type: Number
    },
    'position.z': {
        type: Number
    },
    onClickEvents: {
        type: [EventSchema]
    }
});

HyperlinkObjects = new Mongo.Collection('hyperlinkObjects', {
    transform: doc => {
        return new HyperlinkObject(doc);
    }
});

HyperlinkObjects.attachSchema(HyperlinkObjectSchema);
