/**
 * @file Contains global data for the site colophon
 * @author Akshit Sethi <hi@akshitsethi.com>
 */

/**
 * Edit the values for the properties in this file to fit your site.
 * You can add as many new properties as you want,
 * but you shouldn’t remove any of the ones already included here
 * without also editing the files where those properties are used.
 * Otherwise, the site will probably break.
 */

/**
 * Global colophon data module
 * @module _data/colophon
 * @see {@link https://www.11ty.dev/docs/data-global/ Global data files in 11ty}
 */
module.exports = {
    en: {
        generator: '🏗️ Created by <a href=\"https://twitter.com/akshitsethi\">@akshitsethi</a> with the static site generator <a href=\"https://11ty.dev/\">🕚  Eleventy</a>.',
        languages: 'Source code written in 🍦 JavaScript, 🕸️ semantic HTML, 🎨 progressively enhanced CSS, and a 🧂 dash of Markdown.',
        git: '💝 Contribute on <a href=\"http://github.com/akshitsethi/11ty-blog/\">GitLab</a>.',
        host: '🚀 Hosted on <a href=\"https://netlify.com/\">Netlify</a>.'
    }
};
