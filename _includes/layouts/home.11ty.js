/**
 * @file Defines the chained template for home page
 * @author Akshit Sethi <hi@akshitsethi.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
const data = {
    layout: 'base'
};

/**
 * The content of the home page template
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/pagination/ Pagination in 11ty}
 */
function render(data) {
    const locale = this.getLocale(data);
    const l10n = data.site[locale];

    let reversed = [];

    if (data.collections.posts) {
        reversed = [...data.collections.posts.slice(-2)].reverse();
    }

    return `<article>
        <!-- ⬇️  Delete between this line … -->
        ${this.gettingStarted(data)}
        <!-- ⬆️  … and this line -->
        ${data.content}
        <h2>${l10n.postsArchive.headline}</h2>
        ${this.archive(data, reversed)}
        <p><a href="${l10n.postsArchive.url}">${l10n.postsArchive.prompt}</a></p>
    </article>`;
}

module.exports = {
    data,
    render
};
