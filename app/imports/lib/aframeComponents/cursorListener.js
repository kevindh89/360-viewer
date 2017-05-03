AFRAME.registerComponent('cursor-listener', {
    init() {
        this.el.addEventListener('click', evt => {
            // const el = evt.detail.intersectedEl;
            // let src = el.getAttribute('data-src').substring(4);
            // src = src.substring(0, src.length - 1);
            // $('#image').attr('src', src);
            // activeSceneId.set(el.getAttribute('data-id'));
            evt.stopPropagation();
            // cursor.setAttribute('scale', '0.30 0.30 0.30');
        });
        this.el.addEventListener('mouseleave', evt => {
            // Reset cursor size
            const cursor = evt.srcElement;
            cursor.emit('mouseleave-clickable');
            cursor.setAttribute('scale', '0.30 0.30 0.30');
        });
        this.el.addEventListener('mouseenter', evt => {
            const cursor = evt.srcElement;
            const el = evt.detail.intersectedEl;

            // Apparently the mouseenter event gets triggered without a intersect element sometimes.
            if (el === undefined || el.getAttribute('data-src') === null) {
                return;
            }

            let src = el.getAttribute('data-src').substring(4);
            src = src.substring(0, src.length - 1);

            if ($('#image').attr('src') === src) {
                // If the image is currently active, don't trigger the animation.
                return;
            }
            cursor.emit('mouseover-clickable');
        });
    }
});
