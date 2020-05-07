export const isContainsProtocol = (str) => {
    return str.indexOf("http://") == 0 || str.indexOf("https://") == 0;
};

export const fixUrl = (url) => {
    return isContainsProtocol(url) ? url : 'https://' + url;
};

export const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};