/**
 * Created by kevindeheer on 18-02-17.
 */
HyperlinkObject = class HyperlinkObject {
    constructor(doc) {
        _.extend(this, doc);
    }

    findOnClickEvents(type) {
        return _.findWhere(this.onClickEvents, { type: type });
    }
};

HyperlinkObjectSchema = new SimpleSchema({
    sceneId: {
        type: String
    },
    position: {
        type: Object
    },
    'position.x': {
        type: String
    },
    'position.y': {
        type: String
    },
    'position.z': {
        type: String
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
