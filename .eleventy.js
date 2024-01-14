const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require("eleventy-plugin-toc");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const fs = require("fs");

const getSvgContent = function (file) {
	let relativeFilePath = `./page/assets/${file}`;
	let data = fs.readFileSync(relativeFilePath, function (err, contents) {
		if (err) return err;
		return contents;
	});

	return data.toString("utf8");
};

module.exports = (eleventyConfig) => {
	eleventyConfig.addWatchTarget("./css/");
	eleventyConfig.addWatchTarget("./page/assets/");
	eleventyConfig.addPassthroughCopy({
		"./page/assets/icon.*": "/",
		"./page/assets/*.jpg": "/",
	});
	eleventyConfig.setLibrary(
		"md",
		markdownIt({
			html: true,
		})
			.use(markdownItAnchor, {
				permalink: markdownItAnchor.permalink.linkInsideHeader({
					placement: "before",
				}),
			})
	);
	eleventyConfig.addPlugin(pluginTOC, {
		ul: "ol",
		flat: true,
	});
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addShortcode("svg", getSvgContent);

	return {
		dir: {
			input: "page",
			output: "dist_page",
		},
	};
};
