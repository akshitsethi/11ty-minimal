/**
 * @file Defines a shortcode for an “Edit in Git” link
 * @author Akshit Sethi <hi@akshitsethi.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for “Edit in Git” link
 * @module _includes/shortcodes/edit-this-page
 * @param {Object} eleventyConfig 11ty’s Config API
 */
module.exports = eleventyConfig => {
    /**
     * The link markup
     * @method
     * @name editThisPage
     * @param {Object} data 11ty’s data object
     * @return {String} The rendered shortcode
     * @example `${this.editThisPage(data)}`
     * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
     * @see {@link https://www.11ty.dev/docs/quicktips/edit-on-github-links/  Add Edit in Git links with 11ty}
     */
    eleventyConfig.addShortcode('editThisPage', function(data) {
        const locale = this.getLocale(data);
        const l10n = data.site[locale];

        return `<a href="${data.pkg.repository.editUrl}/${data.page.inputPath}">${l10n.editThisPage}</a>`
    });
};
