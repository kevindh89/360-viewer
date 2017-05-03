AFRAME.registerComponent('set-image', {
    schema: {
        on: {
            type: 'string'
        },
        target: {
            type: 'selector'
        },
        src: {
            type: 'string'
        },
        dur: {
            type: 'number',
            default: 300
        }
    },
    init: function init() {
        const data = this.data;
        const el = this.el;
        const event = 'click-hyperlink';

        el.addEventListener('click', () => {
            data.target.emit(event);
            el.emit(event);
            _.each(document.querySelectorAll('.hyperlink-object'), obj => {
                obj.setAttribute('visible', false);
            });
            setTimeout(() => {
                data.target.setAttribute('material', 'src', data.src);
            }, 500);
        });
    }
});