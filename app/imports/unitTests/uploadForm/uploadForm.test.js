import { chai } from 'meteor/practicalmeteor:chai';

import '../../lib/uploadForm/uploadForm.js';

describe('Upload_form', function () {
    it('instantiates an UploadForm', function () {
        const uploadForm = new UploadForm();
        chai.assert.equal(uploadForm.constructor, UploadForm);
    });
});
