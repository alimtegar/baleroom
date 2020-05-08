const withOptimizedImages = require('next-optimized-images');
const withPWA = require('next-pwa');

const config = {
    env: {
        APP_NAME: 'Baleroom',
        APP_DESCRIPTION: 'Menawarkan hotel apartemen. Memberikan keunggulan pelayanan kamar yang nyaman dan 24 jam.',
        API_URL: 'http://localhost:8888/baleroom/public/baleroom/',
        DEVELOPER_NAME: 'Alterweb',
        DEVELOPER_URL: 'https://alter.web.id'
    },
    devIndicators: {
        autoPrerender: false,
    },
    pwa: {
        dest: 'public'
    }
};

module.exports = withPWA(withOptimizedImages(config));