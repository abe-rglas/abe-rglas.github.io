module.exports = function (eleventyConfig) {
	// Output directory: _site
	eleventyConfig.addPassthroughCopy("md");
	 eleventyConfig.addPassthroughCopy("mylayout.css");
};



