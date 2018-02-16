import './models/textObject.js';
import './schemas/textObject.js';

TextObjects = new Mongo.Collection('textObjects', {
    transform: doc => new TextObject(doc)
});

TextObjects.attachSchema(TextObjectSchema);
