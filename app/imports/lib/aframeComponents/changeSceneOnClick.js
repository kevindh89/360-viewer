AFRAME.registerComponent('change-scene-on-click', {
    schema: {
        scene: {
            type: 'string'
        }
    },
    init() {
        const el = this.el;

        el.addEventListener('click', () => {
            const sceneEl = $(this.el).closest('a-scene');

            $('a-entity', sceneEl).each(function () {
                if ($(this).attr('visible') === true) {
                    $(this).attr('data-invisible-due-scene-transition', 'true');
                    $(this).attr('visible', false);
                }
            });

            document.getElementById('image').emit('fade-sky-to-black');
            Meteor.setTimeout(() => {
                const event = new CustomEvent('change-scene', {
                    detail: {
                        destinationId: this.attrValue.scene
                    }
                });
                document.getElementById('scene').dispatchEvent(event);
            }, 750);

            Meteor.setTimeout(() => {
                $('a-entity', sceneEl).each(function () {
                    if ($(this).attr('data-invisible-due-scene-transition') === 'true') {
                        $(this).attr('data-invisible-due-scene-transition', false);
                        $(this).attr('visible', true);
                    }
                });

                document.getElementById('image').emit('fade-sky-to-image');
            }, 1000);
        });
    }
});
