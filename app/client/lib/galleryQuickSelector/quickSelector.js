/**
 * Created by kevindeheer on 27-08-16.
 */
Template.quickSelector.events({
    'click img': (event) => {
        document.querySelector('a-sky').setAttribute('src', event.target.src);
        $('#quickSelector').fadeOut();
    }
});

Template.quickSelector.helpers({
    galleryObjects: () => {
        return GalleryObjects.find({}, {limit: 3});
    },
    gallerySrc: (obj) => {
        return 'src: url(' + obj.image + ')';
    },
    getPosition: (index) => {
        const positions = {
            0: '7 0 0',
            1: '-5 0 -5',
            2: '-5 0 7'
        };
        return positions[index];
    }
});
