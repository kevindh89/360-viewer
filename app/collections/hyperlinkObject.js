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

    getLabelPosition() {
        if (this.label && this.label.position) {
            return this.label.position;
        }

        const defaultX = 0;
        const defaultY = 2;
        const defaultZ = 0;

        if (this.label && !this.label.position) {
            return {
                x: defaultX,
                y: defaultY,
                z: Math.round(this.label.text.length / 2) * 0.5 // centers the text above the marker
            };
        }

        return {
            x: defaultX,
            y: defaultY,
            z: defaultZ
        };
    }

    getLabelRotation() {
        if (!this.label || !this.label.rotation) {
            return {
                x: 0,
                y: 90,
                z: 0
            };
        }

        return this.label.rotation;
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
