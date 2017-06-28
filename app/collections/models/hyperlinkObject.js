HyperlinkObject = class HyperlinkObject {
    constructor(doc) {
        _.extend(this, doc);
    }

    findOnClickEvents(type) {
        return _.findWhere(this.onClickEvents, { type });
    }

    getDestinationSceneId() {
        if (this.findOnClickEvents(ViewerEvent.__types.HYPERLINK) !== undefined) {
            return this.findOnClickEvents(ViewerEvent.__types.HYPERLINK).data.navigateToSceneId;
        }
        return undefined;
    }

    getLabelPosition() {
        if (this.label && this.label.position) {
            return this.label.position;
        }

        const defaultX = 0;
        const defaultY = 2;
        const defaultZ = 0;

        if (this.label && !this.label.position) {
            return {
                x: defaultX,
                y: defaultY,
                z: Math.round(this.label.text.length / 2) * 0.5 // centers the text above the marker
            };
        }

        return {
            x: defaultX,
            y: defaultY,
            z: defaultZ
        };
    }

    getLabelRotation() {
        if (!this.label || !this.label.rotation) {
            return {
                x: 0,
                y: 90,
                z: 0
            };
        }

        return this.label.rotation;
    }
};
