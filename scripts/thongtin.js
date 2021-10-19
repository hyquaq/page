var button = document.querySelector('div #more');
let incomingPush = true;
let recentPush = true;
let featurePush = true;
function pushIncoming() {
    let incoming = document.querySelector('#hoat-dong .bottom .incoming');
    let content = document.querySelector('#hoat-dong .incoming .content');
    let button = document.querySelector('.incoming #more');
    let buttonMore = document.querySelector('#hoat-dong .incoming .more');
    if(incomingPush === true){
    button.className = 'bx bx-up-arrow';
    content.style.height = '200px';
    incoming.style.height = '580px';
    buttonMore.style.display = 'block';
    buttonMore.style.bottom = '50px';
    incomingPush = false;
    } else if(incomingPush === false){
        incoming.style.height = '380px';
        content.style.height = '50px';
        button.className = 'bx bx-down-arrow';
        buttonMore.style.display = 'none';
        incomingPush = true;
    }
}
function pushRecent() {
    let recent = document.querySelector('#hoat-dong .bottom .recent');
    let button = document.querySelector('.recent #more');
    let content = document.querySelector('#hoat-dong .recent .content');
    let buttonMore = document.querySelector('#hoat-dong .recent .more');
    if(recentPush === true){
    recent.style.height = '580px';
    content.style.height = '200px';
    buttonMore.style.display = 'block';
    button.className = 'bx bx-up-arrow';
    recentPush = false;
    } else if(recentPush === false){
        recent.style.height = '380px';
        content.style.height = '50px';
        button.className = 'bx bx-down-arrow';
        buttonMore.style.display = 'none';
        recentPush = true;
    }
}
function pushFeature() {
    let feature = document.querySelector('#hoat-dong .bottom .feature');
    let content = document.querySelector('#hoat-dong .feature .content');
    let button = document.querySelector('.feature #more');
    let buttonMore = document.querySelector('#hoat-dong .feature .more');
    if(featurePush === true){
    feature.style.height = '580px';
    content.style.height = '200px';
    buttonMore.style.display = 'block';
    button.className = 'bx bx-up-arrow';
    featurePush = false;
    } else if(featurePush === false){
        feature.style.height = '380px';
        content.style.height = '50px';
        button.className = 'bx bx-down-arrow';
        buttonMore.style.display = 'none';
        featurePush = true;
    }
}