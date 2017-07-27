import './textObject.html';

export default TextObjectTemplate = {
    textObject_helpers: {
        getPosition(textObject) {
            return `${textObject.position.x} ${textObject.position.y} ${textObject.position.z}`;
        },
        getRotation(textObject) {
            if (textObject.rotation === undefined) {
                return `${0} ${0} ${0}`;
            }
            return `${textObject.rotation.x} ${textObject.rotation.y} ${textObject.rotation.z}`;
        }
    }
};
