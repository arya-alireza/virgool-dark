var css = chrome.extension.getURL('css/dark.css');
$('html').addClass('dark-theme');
$('head').append('<link href="' + css + '" rel="stylesheet" />');