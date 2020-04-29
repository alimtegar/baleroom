export const isContainsProtocol = (str) => {
    return str.indexOf("http://") == 0 || str.indexOf("https://") == 0;
};

export const fixUrl = (url) => {
    return isContainsProtocol(url) ? url : 'https://' + url;
};