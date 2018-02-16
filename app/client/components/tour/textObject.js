import { Template } from 'meteor/templating';

import '../../../imports/client/components/tour/textObject.html';
import '../../../imports/client/components/tour/textObject.js';
import '../../../collections/models/textObject.js';

Template.textObject.helpers(
    MeteorContextInjector.wrap(TextObjectTemplate.textObject_helpers, TextObject)
);
