const withCSS = require('@zeit/next-css');
// const withPurgeCSS = require('next-purgecss');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withOptimizedImages = require('next-optimized-images');

module.exports = withCSS(withImages(withFonts(withOptimizedImages())));