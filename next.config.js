const withOptimizedImages = require('next-optimized-images');
const withPWA = require('next-pwa');
const fetch = require('isomorphic-unfetch');
const apiUrl = 'https://admin.baleroom.com/public/baleroom/';

const config = {
    env: {
        APP_NAME: 'Baleroom',
        APP_DESCRIPTION: 'Menawarkan hotel apartemen. Memberikan keunggulan pelayanan kamar yang nyaman dan 24 jam.',
        API_URL: apiUrl,
        DEVELOPER_NAME: 'Alterweb',
        DEVELOPER_URL: 'https://alter.web.id'
    },
    devIndicators: {
        autoPrerender: false,
    },
    pwa: {
        dest: 'public'
    },
    // exportPathMap: async function () {
    //     const routes = {
    //         '/': { page: '/' },
    //         '/amenities': { page: '/amenities' },
    //         '/rooms': { page: '/rooms' },
    //         '/access-and-attractions': { page: '/access-and-attractions' },
    //     };

    //     // Rooms
    //     let rooms = await fetch(apiUrl + 'items/rooms?filter[status]=published&sort=order&fields=unique_url_slug');
    //         rooms = await rooms.json();
    //         rooms = await rooms.data;

    //     rooms.forEach((room) => {
    //         routes[`/rooms/${room.unique_url_slug}`] = { page: `/rooms/${room.unique_url_slug}` };
    //     });

    //     // Pages
    //     let pages = await fetch(apiUrl + 'items/pages?filter[status]=published&fields=unique_url_slug');
    //         pages = await pages.json();
    //         pages = await pages.data;

    //     pages.forEach((page) => {
    //         routes[`/${page.unique_url_slug}`] = { page: `/${page.unique_url_slug}` };
    //     });

    //     return routes;
    // },
};

module.exports = withOptimizedImages(config);