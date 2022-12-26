/**
 * @file Defines a shortcode for inserting variable data into the CSS `:root`
 * @author Akshit Sethi <hi@akshitsethi.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for defining CSS `:root` custom properties
 * @module _includes/shortcodes/cssRoot
 * @param {Object} eleventyConfig 11ty’s Config API
 */
module.exports = eleventyConfig => {
    /**
     * CSS `:root` custom properties
     * @method
     * @name cssRoot
     * @param {Object} data 11ty’s data object
     * @return {String} The rendered shortcode
     * @example `${this.cssRoot(data)}`
     * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
     */
    eleventyConfig.addShortcode('cssRoot', data =>
        `:root {
            /* Color Codes */
            --black: ${data.colors.black.hex};
            --white: ${data.colors.white};
            --silver: ${data.colors.silver};
            --gray-100: ${data.colors.gray[100]};
            --gray-200: ${data.colors.gray[200]};
            --gray-300: ${data.colors.gray[300]};
            --gray-400: ${data.colors.gray[400]};
            --gray-500: ${data.colors.gray[500]};
            --gray-600: ${data.colors.gray[600]};
            --gray-700: ${data.colors.gray[700]};
            --gray-800: ${data.colors.gray[800]};
            --gray-900: ${data.colors.gray[900]};
            --gray-darker: ${data.colors.gray['darker']};
            --gray-dark: ${data.colors.gray['dark']};
            --gray-light: ${data.colors.gray['light']};
            --gray-lighter: ${data.colors.gray['lighter']};

            /* Essentials */
            --background-color: var(--white);
            --border-color: var(--gray-lighter);
            --text-color: var(--gray-200);
            --base-unit: 1rem;

            /* Font sizes */
            --heading-font-size-lg: 4.25rem;
            --heading-font-size-sm: 2.75rem;
            --body-font-size-lg: 1.75rem;
            --body-font-size-sm: 1.4rem;
        }`
    );
};
