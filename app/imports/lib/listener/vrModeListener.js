VRModeListener = class VRModeListener {
    constructor(scene) {
        this.scene = scene;
    }

    onEnter(callback) {
        this.scene.addEventListener('enter-vr', evt => callback(evt));
    }

    onExit(callback) {
        this.scene.addEventListener('exit-vr', evt => callback(evt));
    }
};
