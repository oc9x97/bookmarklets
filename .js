javascript:(function() {
    var userURL = prompt('oc9x97 Proxy\nEnter the URL:');
    if (userURL) {
        if (!/^https?:\/\//i.test(userURL)) {
            userURL = 'https://' + userURL;
        }
        var cachedURL = 'https://webcache.googleusercontent.com/search?q=cache:' + encodeURIComponent(userURL);
        window.location.href = cachedURL;
    }
})();
