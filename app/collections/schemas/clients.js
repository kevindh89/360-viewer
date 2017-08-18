ClientSchema = new SimpleSchema({
    username: {
        type: String
    },
    slug: {
        type: String
    },
    host: {
        type: String,
        optional: true
    },
    logo: {
        type: Object,
        optional: true
    },
    'logo.file': {
        type: String
    },
    'logo.href': {
        type: String,
        optional: true
    },
    tripodStamp: {
        type: Object,
        optional: true
    },
    'tripodStamp.image': {
        type: String,
        optional: true
    },
    customCss: {
        type: String,
        optional: true
    }
});
