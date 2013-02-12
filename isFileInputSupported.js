// Detect input type=file support
var isFileInputSupported = (function () {
  // Handle devices which falsely report support
  if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) {
    return false;
  }
  // Create test element
  var el = document.createElement("input");
  el.type = "file";
  return !el.disabled;
})();
