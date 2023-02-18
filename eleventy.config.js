module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./assets/css/")
    eleventyConfig.addPassthroughCopy('assets')
    return {
        passthroughFileCopy: true
    }
}