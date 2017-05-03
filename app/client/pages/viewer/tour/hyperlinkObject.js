import './hyperlinkObject.html';

Template.hyperlinkObject.helpers({
    // this == HyperlinkObject
    getScene() {
        const sceneId = this.findOnClickEvents(ViewerEvent.__types.HYPERLINK) !== undefined
            ? this.findOnClickEvents(ViewerEvent.__types.HYPERLINK).data.navigateToSceneId
            : undefined;
        return Scenes.findOne({ _id: sceneId });
    },
    getPosition() {
        return `${this.position.x} ${this.position.y} ${this.position.z}`;
    },
    getLabelPosition() {
        if (this.label === undefined || this.label.position === undefined) {
            return `${this.position.x} ${this.position.y} ${this.position.z}`;
        }
        return `${this.label.position.x} ${this.label.position.y} ${this.label.position.z}`;
    },
    getRotation() {
        if (this.rotation === undefined) {
            return `${0} ${0} ${0}`;
        }
        return `${this.rotation.x} ${this.rotation.y} ${this.rotation.z}`;
    },
    getLabelRotation() {
        if (this.label === undefined || this.label.rotation === undefined) {
            return `${0} ${0} ${0}`;
        }
        return `${this.label.rotation.x} ${this.label.rotation.y} ${this.label.rotation.z}`;
    },
    skyImage: scene => {
        if (!scene) { return ''; }
        return `src: url(${scene.findPropertiesOfType(Scene.__properties.SKY).file})`;
    }
});
