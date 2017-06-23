/**
 * Created by kevindeheer on 18-02-17.
 */
HyperlinkObject = class HyperlinkObject {
    constructor(doc) {
        _.extend(this, doc);
    }

    findOnClickEvents(type) {
        return _.findWhere(this.onClickEvents, { type });
    }

    getDefaultLabelPosition() {
        if (!this.label) {
            return '0 2 0';
        }

        const x = 0;
        const y = 2;
        const z = Math.round(this.label.text.length / 2) * 0.5;

        return `${x} ${y} ${z}`;
    }

    getDefaultLabelRotation() {
        return '0 90 0';
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
    rotation: {
        type: Object,
        optional: true
    },
    // Roll
    'rotation.x': {
        type: String
    },
    // Pitch
    'rotation.y': {
        type: String
    },
    // Yaw
    'rotation.z': {
        type: String
    },
    label: {
        type: Object,
        optional: true
    },
    'label.text': {
        type: String,
        optional: true
    },
    'label.position': {
        type: Object,
        optional: true,
        blackbox: true
    },
    'label.rotation': {
        type: Object,
        optional: true,
        blackbox: true
    },
    onClickEvents: {
        type: [EventSchema]
    }
});

HyperlinkObjects = new Mongo.Collection('hyperlinkObjects', {
    transform: doc => new HyperlinkObject(doc)
});

HyperlinkObjects.attachSchema(HyperlinkObjectSchema);
