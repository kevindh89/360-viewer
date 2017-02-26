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
        return _.findWhere(this.properties, { type: type });
    }

    dummy() {
        return true;
    }
};

/**
 * Initialize the collection.
 * The transform function converts all objects into instances of the "Scene" class.
 */
Scenes = new Mongo.Collection("scenes", {
    transform: doc => {
        return new Scene(doc);
    }
});

/**
 * @type {SimpleSchema}
 */
ScenePropertySchema = new SimpleSchema({
    type: {
        type: String // one of Scene.propertyTypes()
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
    properties: {
        type: [ScenePropertySchema]
    }
});

Scenes.attachSchema(SceneSchema);
