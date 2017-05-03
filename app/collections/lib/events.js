ViewerEvent = class ViewerEvent {
    constructor(doc) {
        _.extend(this, doc);
    }

    static get __types() {
        return {
            HYPERLINK: 'hyperlink',
            ANIMATION: 'animation'
        };
    }
};

EventSchema = new SimpleSchema({
    type: {
        type: String // one of ViewerEvent.__types
    },
    data: {
        type: Object,
        blackbox: true
    }
});

HyperlinkEventSchema = new SimpleSchema(EventSchema, {
    'data.navigateToSceneId': {
        type: String
    }
});
