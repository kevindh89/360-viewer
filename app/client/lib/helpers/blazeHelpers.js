import { Template } from 'meteor/templating';

Template.registerHelper('isDefined', value => {
    return value !== undefined;
});
