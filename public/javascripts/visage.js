"use strict";

var debugFunc = function(file, done) {
  console.log(file);
  console.log("Debug function is being called at least");
  done();
};

var sendingCb = function(file, xhr, formData) {
  formData.append("name", "bullshit");
}

var replaceOldWithNew = function(file) {
  this.removeAllFiles();
  this.addFile(file);
}

var init = function() {
  var submitButton = document.querySelector("#submit-image"),
    thisDropzone = this;

    submitButton.addEventListener("click", function() {
      thisDropzone.processQueue();
    });

}


/* The form's id is actually `image-upload-form`, but
   I think Dropzone implicitly camelizes the identifier here. */
Dropzone.options.imageUploadForm = {
  paramName: "file",
  maxFiles: 1,
  maxfilesexceeded: replaceOldWithNew,
  accept: debugFunc,
  autoProcessQueue: false,
  init: init,
  sending: sendingCb
};
