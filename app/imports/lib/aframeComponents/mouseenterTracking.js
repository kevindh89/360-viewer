AFRAME.registerComponent('mouseenter-tracking', {
    schema: {
        popover: {
            type: 'string'
        }
    },

    init() {
        this.el.addEventListener('mouseenter', () => {
            $('.marker-model', $(this.el))[0].setAttribute('model-opacity', 1);
            $('.marker-label', $(this.el))[0].setAttribute('visible', 'true');
        });
        this.el.addEventListener('mouseleave', () => {
            $('.marker-model', $(this.el))[0].setAttribute('model-opacity', 0.5);
            $('.marker-label', $(this.el))[0].setAttribute('visible', 'false');
        });
    }
});
