AFRAME.registerComponent('change-scene', {
    schema: {
        scene: {
            type: 'string'
        }
    },
    init() {
        const el = this.el;

        el.addEventListener('click', () => {
            const sceneEl = $(this.el).closest('a-scene');
            $('a-entity', sceneEl).attr('visible', false);

            document.getElementById('image').emit('set-image-fade');
        });
    }
});
