var app = require('./app.js');

(function(){
  $(document).on('ready', function() {
      $("#input-1").fileinput({'previewFileType':'image'});
  });
}());
