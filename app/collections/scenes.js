/**
 * Created by kevindeheer on 27-08-16.
 */
Scene = class Scene {
    constructor(doc) {
        _.extend(this, doc);
    }

    static get __properties() {
        return {
            SKY: 'sky'
        };
    }

    findPropertiesOfType(type) {
        return _.findWhere(this.properties, { type });
    }
};

/**
 * Initialize the collection.
 * The transform function converts all objects into instances of the "Scene" class.
 */
Scenes = new Mongo.Collection('scenes', {
    transform: doc => new Scene(doc)
});

/**
 * @type {SimpleSchema}
 */
ScenePropertySchema = new SimpleSchema({
    type: {
        type: String // one of Scene._properties()
    },
    file: {
        type: String
    },
    previewFile: {
        type: String
    }
});

/**
 * @type {SimpleSchema}
 */
SceneSchema = new SimpleSchema({
    clientId: {
        type: String
    },
    initialScene: {
        type: Boolean,
        optional: true
    },
    properties: {
        type: [ScenePropertySchema]
    }
});

Scenes.attachSchema(SceneSchema);
