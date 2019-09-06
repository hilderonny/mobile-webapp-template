function showPage(pageId) {
    var cl = document.getElementById(pageId).classList;
    cl.remove('invisible');
}

function hidePage(pageId) {
    var cl = document.getElementById(pageId).classList;
    cl.add('invisible');
}