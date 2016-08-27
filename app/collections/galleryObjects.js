/**
 * Created by kevindeheer on 27-08-16.
 */
GalleryObject = function(doc) {
    _.extend(this, doc);
};

/**
 * Functions for instances of the GalleryObject class can be defined here.
 * @type {{constructor: Function}}
 */
GalleryObject.prototype = {
    constructor: GalleryObject,

    dummy: function() {
        // 'this' is the GalleryObject object.
        return true;
    }
};

/**
 * Initialize the collection.
 * The transform function converts all objects into instances of the "GalleryObject" class.
 */
GalleryObjects = new Mongo.Collection("galleryObjects", {
    transform: doc => {
        return new GalleryObject(doc);
    }
});

/**
 * The schema defines the structure of the objects within the collection.
 *
 * @type {SimpleSchema}
 */
GalleryObjectSchema = new SimpleSchema({
    username: {
        type: String
    }
});

GalleryObjects.attachSchema(GalleryObjectSchema);
