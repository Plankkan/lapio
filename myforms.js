document.addEventListener("DOMContentLoaded", function() {

    // every a element in document
    links = document.getElementsByTagName("a");
    for (var a = 0; a < links.length; a++) {
        if (document.location.href.match(links[a].href)) {
            // note: a element without href attribute is valid
            links[a].removeAttribute("href");
        }
    }

}, false);
