VRModeListener = class VRModeListener {
    constructor(scene) {
        this.scene = scene;
    }

    onEnter(callback) {
        this.scene.addEventListener('enter-vr', evt => {
            console.log('Entered VR mode');
            return callback(evt);
        });
    }

    onExit(callback) {
        this.scene.addEventListener('exit-vr', evt => {
            console.log('Exited VR mode');
            return callback(evt);
        });
    }
};
