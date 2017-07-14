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
