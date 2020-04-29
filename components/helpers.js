export const isContainsProtocol = (str) => {
    return str.indexOf("http://") == 0 || str.indexOf("https://") == 0;
};