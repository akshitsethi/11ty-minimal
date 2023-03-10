/**
 * @file Contains global data for the site colophon
 * @author Akshit Sethi <hi@akshitsethi.com>
 */

/**
 * Edit the values for the properties in this file to fit your site.
 * You can add as many new properties as you want,
 * but you shouldnβt remove any of the ones already included here
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
        generator: 'ποΈ Created by <a href=\"https://twitter.com/akshitsethi\">@akshitsethi</a> with the static site generator <a href=\"https://11ty.dev/\">π  Eleventy</a>.',
        languages: 'Source code written in π¦ JavaScript, πΈοΈ semantic HTML, π¨ progressively enhanced CSS, and a π§ dash of Markdown.',
        git: 'π Contribute on <a href=\"http://github.com/akshitsethi/11ty-blog/\">GitLab</a>.',
        host: 'π Hosted on <a href=\"https://netlify.com/\">Netlify</a>.'
    }
};
