/**
 * Created by kevindeheer on 27-08-16.
 */
Template.quickSelector.events({
    'click img': (event) => {
        document.querySelector('a-sky').setAttribute('src', event.target.src);
    }
});

Template.quickSelector.helpers({
    scenes: () => {
        return Scenes.find({}, {limit: 3});
    },
    gallerySrc: (obj) => {
        return 'src: url(' + obj.image + ')';
    },
    getPosition: (index) => {
        const positions = {
            0: '10 3.50 0',
            1: '-7.50 3.50 -10',
            2: '-7.50 3.50 10'
        };
        return positions[index];
    }
});
