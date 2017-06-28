import './models/hyperlinkObject.js';
import './schemas/hyperlinkObject.js';

HyperlinkObjects = new Mongo.Collection('hyperlinkObjects', {
    transform: doc => new HyperlinkObject(doc)
});

HyperlinkObjects.attachSchema(HyperlinkObjectSchema);
