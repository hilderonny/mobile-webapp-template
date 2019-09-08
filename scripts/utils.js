function showPage(pageId) {
    document.getElementById(pageId).classList.remove('invisible');
}

function hidePage(pageId) {
    document.getElementById(pageId).classList.add('invisible');
}

function showProgressBar() {
    document.querySelector('.progressbar').classList.remove('invisible');
}

function hideProgressBar() {
    document.querySelector('.progressbar').classList.add('invisible');
}