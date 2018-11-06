chrome.storage.local.get(['darkvirgool'], function(data) {
    if (! data.darkvirgool) {
        chrome.storage.local.set({darkvirgool: "yes"});
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
    chrome.tabs.reload();
  }
}
$("#dark-theme").on('change', function() {
    if (this.checked) {
        chrome.storage.local.get(['darkvirgool'], function(data) {
            chrome.storage.local.set({darkvirgool: "yes"});
        });
    } else {
        chrome.storage.local.get(['darkvirgool'], function(data) {
            chrome.storage.local.set({darkvirgool: "no"});
        });
    }
    chrome.tabs.query(query, callback);
});
$("#linkedin").click(function() {
    chrome.tabs.create({url: 'https://www.linkedin.com/in/aryapro'});
});