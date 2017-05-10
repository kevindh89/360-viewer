import { Template } from 'meteor/templating';

Template.registerHelper('isDefined', value => value !== undefined);
