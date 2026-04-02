const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  // Add plugins
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://sarahsmaples.github.io/nadines",
    },
  });
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("dist/css/styles.css");

  return {
    pathPrefix: "/nadines/",
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
