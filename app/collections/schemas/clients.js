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
    }
});
