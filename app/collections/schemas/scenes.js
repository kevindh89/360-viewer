ScenePropertySchema = new SimpleSchema({
    type: {
        type: String // one of Scene._properties()
    }
});

SkyPropertySchema = new SimpleSchema([ScenePropertySchema, {
    file: {
        type: String
    },
    previewFile: {
        type: String
    },
    rotation: {
        type: Object,
        optional: true
    },
    'rotation.x': {
        type: Number
    },
    'rotation.y': {
        type: Number
    },
    'rotation.z': {
        type: Number
    }
}]);

SceneSchema = new SimpleSchema({
    clientId: {
        type: String
    },
    initialScene: {
        type: Boolean,
        optional: true
    },
    properties: {
        /**
         * one of:
         *  - SkyPropertySchema
         */
        type: [Object],
        blackbox: true
    }
});

