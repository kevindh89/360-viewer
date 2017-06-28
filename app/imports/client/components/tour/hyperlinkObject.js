import './hyperlinkObject.html';

export default HyperlinkObjectTemplate = {
    hyperlinkObjectHelpers: {
        getScene(hyperlinkObject) {
            const sceneId = hyperlinkObject.findOnClickEvents(ViewerEvent.__types.HYPERLINK) !== undefined
                ? hyperlinkObject.findOnClickEvents(ViewerEvent.__types.HYPERLINK).data.navigateToSceneId
                : undefined;
            return Scenes.findOne({ _id: sceneId });
        },
        getPosition(hyperlinkObject) {
            return `${hyperlinkObject.position.x} ${hyperlinkObject.position.y} ${hyperlinkObject.position.z}`;
        },
        getLabelPosition(hyperlinkObject) {
            return `${hyperlinkObject.getLabelPosition().x} ${hyperlinkObject.getLabelPosition().y} ${hyperlinkObject.getLabelPosition().z}`;
        },
        getRotation(hyperlinkObject) {
            if (hyperlinkObject.rotation === undefined) {
                return `${0} ${0} ${0}`;
            }
            return `${hyperlinkObject.rotation.x} ${hyperlinkObject.rotation.y} ${hyperlinkObject.rotation.z}`;
        },
        getLabelRotation(hyperlinkObject) {
            return `${hyperlinkObject.getLabelRotation().x} ${hyperlinkObject.getLabelRotation().y} ${hyperlinkObject.getLabelRotation().z}`;
        }
    },
    helpers: {
        skyImage: scene => {
            if (!scene) { return ''; }
            return `src: url(${scene.findPropertiesOfType(Scene.__properties.SKY).file})`;
        }
    }
};

