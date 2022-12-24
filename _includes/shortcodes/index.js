/**
 * @file Imports shortcodes and configures them with 11ty (.eleventy.js)
 * @author Akshit Sethi <hi@akshitsethi.com>
 */

// Import shortcodes to include
const locale = require('./locale');
const archive = require('./archive');
const author = require('./author');
const authorMeta = require('./author-meta');
const colophon = require('./colophon');
const copyrightNotice = require('./copyright-notice');
const cssRoot = require('./css-root');
const description = require('./description');
const editThisPage = require('./edit-this-page');
const externalCSS = require('./external-css');
const favicon = require('./favicon');
const gettingStarted = require('./getting-started');
const headTag = require('./head-tag');
const inlineCSS = require('./inline-css');
const nav = require('./nav');
const pageDate = require('./page-date');
const paginationNav = require('./pagination-nav');
const siteFooter = require('./site-footer');
const siteHeader = require('./site-header');
const socialMeta = require('./social-meta');
const titleTag = require('./title-tag');

/**
 * A loader module for shortcodes
 * @module _includes/shortcodes
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.dev/docs/config/ Configuring 11ty}
 * @see {@link https://www.11ty.dev/docs/shortcodes/ Shortcodes in 11ty}
 */
module.exports = eleventyConfig => {
    locale(eleventyConfig);
    archive(eleventyConfig);
    author(eleventyConfig);
    authorMeta(eleventyConfig);
    colophon(eleventyConfig);
    copyrightNotice(eleventyConfig);
    cssRoot(eleventyConfig);
    description(eleventyConfig);
    editThisPage(eleventyConfig);
    externalCSS(eleventyConfig);
    favicon(eleventyConfig);
    gettingStarted(eleventyConfig);
    headTag(eleventyConfig);
    inlineCSS(eleventyConfig);
    nav(eleventyConfig);
    pageDate(eleventyConfig);
    paginationNav(eleventyConfig);
    siteFooter(eleventyConfig);
    siteHeader(eleventyConfig);
    socialMeta(eleventyConfig);
    titleTag(eleventyConfig);

    return;
};
