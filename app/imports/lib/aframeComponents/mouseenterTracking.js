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
            $('.a-canvas').addClass('vw-mouseover');
        });
        this.el.addEventListener('mouseleave', () => {
            $('.marker-model', $(this.el))[0].setAttribute('model-opacity', 0.5);
            $('.marker-label', $(this.el))[0].setAttribute('visible', 'false');
            $('.a-canvas').removeClass('vw-mouseover');
        });
    }
});
