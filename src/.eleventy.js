module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");
  
  // Copy `css/fonts/` to `_site/css/fonts`
  // If you use a subdirectory, it’ll copy using the same directory structure.
  eleventyConfig.addPassthroughCopy("css");

  // Custom Nunjucks Filters
  // Nunjucks Filter
  eleventyConfig.addNunjucksFilter("formatDate", function(date) { 
    const d = Date.parse(date);
    const intlDate = new Intl.DateTimeFormat('en-US').format(date);
    return intlDate.toString();
  });
};