import './hyperlinkObject.html';

export default HyperlinkObjectTemplate = {
    hyperlinkObject_helpers: {
        getDestinationScene(hyperlinkObject) {
            return Scenes.findOne({ _id: hyperlinkObject.getDestinationSceneId() });
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
    }
};

