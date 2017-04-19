ClickListener = class ClickListener {
    constructor(scene) {
        this.scene = scene;
    }

    onClick(callback) {
        this.scene.addEventListener('click', event => callback(event));
    }
};
