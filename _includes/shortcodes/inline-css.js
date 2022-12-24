/**
 * @file Defines a shortcode for loading inline stylesheets
 * @author Akshit Sethi <hi@akshitsethi.com>
 */

/**
 * A JavaScript Template module for the inline CSS `links`
 * @module _includes/shortcodes/inline-css
 * @param {Object} eleventyConfig 11ty’s Config API
 */
module.exports = eleventyConfig => {
    /**
     * HTML `<style>` markup
     * @method
     * @name inlineCSS
     * @param {Object} data 11ty’s data object
     * @return {String} The rendered shortcode
     * @example `${this.inlineCSS(data)}`
     * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
     */
    eleventyConfig.addShortcode('inlineCSS', function(data) {
        let root = `${this.cssRoot(data)}`
        let css = `${this.fileToString('assets/css/index.css')}`;

        if (data.page.url === '/') {
            css += `${this.fileToString('assets/css/home.css')}`;
        }

        if (data.form && data.form !== undefined) {
            css += `${this.fileToString('assets/css/forms.css')}`;
        }

        return `${root}\n${css}`;
    });
};
