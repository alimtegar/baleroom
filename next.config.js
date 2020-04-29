require("dotenv").config();

const webpack = require("webpack");
const withCSS = require('@zeit/next-css');
// const withPurgeCSS = require('next-purgecss');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withOptimizedImages = require('next-optimized-images');

module.exports = withCSS(withImages(withFonts(withOptimizedImages({
    webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        }
        /**
         * Returns environment variables as an object
         */
        const env = Object.keys(process.env).reduce((acc, curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
            return acc;
        }, {});

        /** Allows you to create global constants which can be configured
        * at compile time, which in our case is our environment variables
        */
        config.plugins.push(new webpack.DefinePlugin(env));
        return config
    }
}))));