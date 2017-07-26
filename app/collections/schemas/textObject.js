TextObjectSchema = new SimpleSchema({
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
    text: {
        type: String
    },
    font: {
        type: Object,
        optional: true
    },
    'font.size': {
        type: Number
    },
    'font.family': {
        type: String
    },
    background: {
        type: Object,
        optional: true
    },
    'background.color': {
        type: String
    }
});
