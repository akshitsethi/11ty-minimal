/**
 * @file Defines the base template
 * @author Akshit Sethi <hi@akshitsethi.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#function JavaScript functions as templates in 11ty}
 */

/**
 * Base JavaScript Template module
 * @module _includes/layouts/base
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
 * @see {@link https://www.11ty.dev/docs/shortcodes/ Shortcodes in 11ty}
 */
function render(data) {
    const locale = this.getLocale(data);
    const l10n = data.site[locale];

    return `<!DOCTYPE html>
        <html lang="${l10n.locale}">
        ${this.headTag(data)}
        <body class="grid gap no-margin">
            ${this.siteHeader(data)}
            ${this.nav(data.collections.nav, data.page, '', l10n.nav.primary)}
            <main id="main" class="grid gap">
            ${data.content}
            </main>
            ${this.siteFooter(data)}
        </body>
        </html>`;
}

module.exports = {
    render
};
