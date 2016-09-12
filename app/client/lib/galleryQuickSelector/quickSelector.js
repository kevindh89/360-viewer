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
    }
});
