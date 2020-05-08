const withPWA = require('next-pwa');

module.exports = withPWA({
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
});