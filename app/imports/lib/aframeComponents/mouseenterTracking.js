AFRAME.registerComponent('mouseenter-tracking', {
    schema: {
        popover: {
            type: 'string'
        }
    },

    init() {
        this.el.addEventListener('mouseenter', () => {
            $('.marker-model', $(this.el))[0].setAttribute('model-opacity', 1);
        });
        this.el.addEventListener('mouseleave', () => {
            $('.marker-model', $(this.el))[0].setAttribute('model-opacity', 0.5);
        });
    }
});
