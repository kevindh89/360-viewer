import { Template } from 'meteor/templating';

Template.registerHelper('isDefined', value => {
    console.log('value', value);
    return value !== undefined;
});
