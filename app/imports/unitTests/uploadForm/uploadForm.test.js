import { chai } from 'meteor/practicalmeteor:chai';

import '../../lib/uploadForm/uploadForm.js';

describe('Upload_form', () => {
    it('instantiates an UploadForm', () => {
        const uploadForm = new UploadForm();
        chai.assert.equal(uploadForm.constructor, UploadForm);
    });
});
