window.browser = (function() {
    return window.msBrowser || window.chrome || window.browser;
})();
browser.storage.local.get(['darkvirgool'], function(data) {
    if (! data.darkvirgool) {
        browser.storage.local.set({darkvirgool: "yes"});
        var css = browser.extension.getURL('css/dark.css');
        $('html').addClass('dark-theme');
        $('head').append('<link href="' + css + '" rel="stylesheet" />');
    } else {
        if (data.darkvirgool == "yes") {
            var css = browser.extension.getURL('css/dark.css');
            $('html').addClass('dark-theme');
            $('head').append('<link href="' + css + '" rel="stylesheet" />');
        } else {
            $('html').removeClass('dark-theme');
        }
    }
});