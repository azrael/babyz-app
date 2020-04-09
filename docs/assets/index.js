const query = window.location.search
    .replace('?', '')
    .split('&')
    .reduce((res, item) => {
        let [key, value] = item.split('=');

        res[key] = value;

        return res;
    }, {});

const os = getMobileOS();

function getMobileOS() {
    let ua = navigator.userAgent || navigator.vendor || window.opera || '';

    return /android/i.test(ua) ? 'android' : 'ios';
}

function changeOS(os) {
    let other = os === 'ios' ? 'android' : 'ios';

    document.querySelector('.app').classList.remove(other);
    document.querySelector('.app').classList.add(os);
    document.querySelector(`.os-label.${os}`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    if (['ios', 'android'].includes(query.os))
        changeOS(query.os);
    else
        window.location.replace(`?os=${os}`);
});
