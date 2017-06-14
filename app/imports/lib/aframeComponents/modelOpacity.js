AFRAME.registerComponent('model-opacity', {
    schema: { default: 1.0 },
    init() {
        this.el.addEventListener('model-loaded', this.update.bind(this));
    },
    update() {
        const mesh = this.el.getObject3D('mesh');
        const data = this.data;
        if (!mesh) { return; }
        mesh.traverse(_node => {
            const node = _node;
            if (node.isMesh) {
                node.material.opacity = data;
                node.material.transparent = true;
                node.material.needsUpdate = true;
            }
        });
    }
});
