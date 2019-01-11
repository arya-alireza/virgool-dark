window.browser = (function() {
    return window.msBrowser || window.chrome || window.browser;
})();
browser.storage.local.get(['darkvirgool'], function(data) {
    if (! data.darkvirgool) {
        browser.storage.local.set({darkvirgool: "yes"});
        $("#dark-theme").prop('checked', true);
    } else {
        if (data.darkvirgool == "yes") {
            $("#dark-theme").prop('checked', true);
        } else {
            $("#dark-theme").prop('checked', false);
        }
    }
});
var query = { active: true, currentWindow: true };
function callback(tabs) {
  var currentTab = tabs[0]; // there will be only one in this array
  var url = new URL(currentTab.url).hostname;
  if (url == 'virgool.io') {
    browser.tabs.reload();
  }
}
$("#dark-theme").on('change', function() {
    if (this.checked) {
        browser.storage.local.get(['darkvirgool'], function(data) {
            browser.storage.local.set({darkvirgool: "yes"});
        });
    } else {
        browser.storage.local.get(['darkvirgool'], function(data) {
            browser.storage.local.set({darkvirgool: "no"});
        });
    }
    browser.tabs.query(query, callback);
});
$("#linkedin").click(function() {
    browser.tabs.create({url: 'https://www.linkedin.com/in/aryapro'});
});