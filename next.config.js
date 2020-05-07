const withPWA = require('next-pwa');

module.exports = withPWA({
    env: {
        APP_NAME: 'Baleroom',
        // APP_TAGLINE: '',
        APP_DESCRIPTION: 'Menawarkan hotep apartemen. Memberikan keunggulan pelayanan yang nyaman.',
        API_URL: 'http://localhost:8888/baleroom/public/baleroom/',
    },
    pwa: {
        dest: 'public'
    }
});