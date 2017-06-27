import './hyperlinkObject.html';

export default HyperlinkObjectTemplate = {
    helpers: {
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
            return `${this.getLabelPosition().x} ${this.getLabelPosition().y} ${this.getLabelPosition().z}`;
        },
        getRotation() {
            if (this.rotation === undefined) {
                return `${0} ${0} ${0}`;
            }
            return `${this.rotation.x} ${this.rotation.y} ${this.rotation.z}`;
        },
        getLabelRotation() {
            return `${this.getLabelRotation().x} ${this.getLabelRotation().y} ${this.getLabelRotation().z}`;
        },
        skyImage: scene => {
            if (!scene) { return ''; }
            return `src: url(${scene.findPropertiesOfType(Scene.__properties.SKY).file})`;
        }
    }
};

