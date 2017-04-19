AFRAME.registerComponent('mouseenter-tracking', {
    init: function () {
        let locked = false;

        this.el.addEventListener('mouseenter', function (evt) {
            if (locked === true ) { return; }

            const hyperlinkObject = evt.srcElement;
            hyperlinkObject.setAttribute('collada-model', 'url(/models/pointer2.dae)');

            locked = true;
            setTimeout(function() { locked = false; }, 50);
        });
        this.el.addEventListener('mouseleave', function (evt) {
            if (locked === true ) { return; }

            const hyperlinkObject = evt.srcElement;
            hyperlinkObject.setAttribute('collada-model', 'url(/models/pointer.dae)');
            locked = true;
            setTimeout(function() { locked = false; }, 50);
        });
    }
});