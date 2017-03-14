/**
 * Created by kevindeheer on 01-01-17.
 */
Template.tourObjectSelector.events({
    'click img': (event) => {
        document.querySelector('a-sky').setAttribute('src', event.target.src);
    }
});

Template.tourObjectSelector.helpers({
    gallerySrc: (obj) => {
        return 'src: url(' + TourImages.findOne({_id: obj.file360Image}).link() + ')';
    }
});