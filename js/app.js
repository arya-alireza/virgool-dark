chrome.storage.local.get(['darkvirgool'], function(data) {
    if (! data.darkvirgool) {
        chrome.storage.local.set({darkvirgool: "yes"});
        var css = chrome.extension.getURL('css/dark.css');
        $('html').addClass('dark-theme');
        $('head').append('<link href="' + css + '" rel="stylesheet" />');
    } else {
        if (data.darkvirgool == "yes") {
            var css = chrome.extension.getURL('css/dark.css');
            $('html').addClass('dark-theme');
            $('head').append('<link href="' + css + '" rel="stylesheet" />');
        } else {
            $('html').removeClass('dark-theme');
        }
    }
});