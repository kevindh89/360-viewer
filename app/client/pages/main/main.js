import { Template } from 'meteor/templating';

import '../../../imports/ui/components/client/main/main.html';
import '../../../imports/ui/components/client/main/main.js';
import '../../../imports/ui/components/client/tour/hyperlinkObject.js';

require('aframe-animation-component');

Template.main.onCreated(Main.onCreated);
Template.main.onRendered(Main.onRendered);
Template.main.helpers(Main.helpers);
