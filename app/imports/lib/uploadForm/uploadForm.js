/**
 * Created by kevindeheer on 01-01-17.
 */
UploadForm = class UploadForm {
    constructor() {
        this.uploadSuccessCallbacks = [];
    }

    handleChangeFileInput(event, template) {
        if (event.currentTarget.files && event.currentTarget.files[0]) {
            // We upload only one file, in case
            // multiple files were selected
            const upload = TourImages.insert({
                file: event.currentTarget.files[0],
                streams: 'dynamic',
                chunkSize: 'dynamic',
            }, false);

            upload.on('start', () => {
                template.currentUpload.set(this);
            });

            upload.on('end', (error, fileObj) => {
                if (error) {
                    toastr.error(`Error during upload: ${error}`);
                } else {
                    _.each(this.uploadSuccessCallbacks, callback => {
                        callback(fileObj);
                    });
                }
                template.currentUpload.set(false);
            });

            upload.start();
        }
    }

    addUploadSuccessCallback(callback) {
        this.uploadSuccessCallbacks.push(callback);
    }
};
