import { Template } from 'meteor/templating';

import '../../../imports/ui/components/client/main/main.html';
import '../../../imports/ui/components/client/main/main.js';
import '../../../imports/ui/components/client/tour/hyperlinkObject.js';

require('aframe-animation-component');

Template.main.onCreated(MainTemplate.onCreated);
Template.main.onRendered(MainTemplate.onRendered);
Template.main.helpers(MainTemplate.helpers);
