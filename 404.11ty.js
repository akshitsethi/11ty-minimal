/**
 * @file Defines the chained template for the 404 page
 * @author Akshit Sethi <hi@akshitsethi.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
const data = {
  locale: 'en',
  title: '🎉 Congratulations! You found the sample 404 page!',
  layout: 'page',
  permalink: '404.html',
  templateEngineOverride: '11ty.js,md',
  eleventyExcludeFromCollections: true
};

/**
 * The content of the 404 page template
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/quicktips/not-found/ 404 pages in 11ty}
 */
function render(data) {
  return `Unless you were looking for this page on purpose, well … the other resource you were actually looking for probably can’t be found at the address you requested.

📝 Edit this template to help your visitors find their way back to more meaningful content.

### Other options

* [😇 Complain to ${data.author.name.givenName} on Twitter](${data.author.social.accounts.find(
  account => account.name === 'Twitter').url})`
}

module.exports = {
    data,
    render
};
