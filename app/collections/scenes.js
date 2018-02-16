import './models/scenes.js';
import './schemas/scenes.js';

Scenes = new Mongo.Collection('scenes', {
    transform: doc => new Scene(doc)
});

Scenes.attachSchema(SceneSchema);
