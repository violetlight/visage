"use strict";

var debugFunc = function(file, done) {
  console.log(file);
  done();
};

/* in dashboard.jade, the form's id is actually `image-upload-form`, but
   I think Dropzone implicitly camelizes the identifier here. */
Dropzone.options.imageUploadForm = {
  paramName: "file",
  accept: debugFunc
};
