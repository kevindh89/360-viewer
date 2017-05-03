AFRAME.registerComponent('mouseenter-tracking', {
    schema: {
        popover: {
            type: 'string'
        }
    },

    init() {
        // let locked = false;

        this.el.addEventListener('mouseenter', () => {
            // if (locked === true) { return; }
            //
            // const hyperlinkObject = evt.srcElement;
            // hyperlinkObject.setAttribute('collada-model', 'url(/models/pointer2.dae)');

            // locked = true;
            // setTimeout(() => { locked = false; }, 50);

            // console.log(this.data.popover);
            // const popoverEl = document.createElement('a-entity');
            // popoverEl.setAttribute('text', `value: ${this.data.popover};`);
            // const scene = $(evt.srcElement).closest('a-scene')[0];
            // scene.appendChild(popoverEl);
        });
        // this.el.addEventListener('mouseleave', evt => {
            // if (locked === true) { return; }

            // const hyperlinkObject = evt.srcElement;
            // hyperlinkObject.setAttribute('collada-model', 'url(/models/pointer.dae)');
            // locked = true;
            // setTimeout(() => { locked = false; }, 50);
        // });
    }
});
