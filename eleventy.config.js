module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./public/css/")
    eleventyConfig.addPassthroughCopy('public')

    return {
      templateFormats: [
        "md",
        "html",
        "liquid"
      ],
      dir: {
        input: "src",         // default: "."
        includes: "../_includes",  // default: "_includes"
        data: "../_data",          // default: "_data"
        output: "_site"
      },
      passthroughFileCopy: true
    }
}
