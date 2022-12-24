/**
 * @file Defines a shortcode fetching defined locale
 * @author Akshit Sethi <hi@akshitsethi.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for getting locale
 * @module _includes/shortcodes/locale
 * @param {Object} eleventyConfig 11ty’s Config API
 */
module.exports = eleventyConfig => {
    /**
     * Site locale
     * @method
     * @name getLocale
     * @param {Object} data 11ty’s data object
     * @return {String} The rendered shortcode
     * @example `${this.getLocale(data)}`
     * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
     */
    eleventyConfig.addShortcode('getLocale', function(data) {
        let locale = 'en';

        if (data.locale) {
            locale = data.locale;
        }

        return locale;
    });
};
