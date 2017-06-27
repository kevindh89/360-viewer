import { Template } from 'meteor/templating';

import '../../../imports/client/pages/main/main.html';
import '../../../imports/client/pages/main/main.js';
import '../../../imports/client/components/tour/hyperlinkObject.js';

require('aframe-animation-component');

Template.main.onCreated(MainTemplate.onCreated);
Template.main.onRendered(MainTemplate.onRendered);
Template.main.helpers(MainTemplate.helpers);
