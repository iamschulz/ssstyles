const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require("eleventy-plugin-toc");
const markdownItAbbr = require("markdown-it-abbr");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const fs = require("fs");

const getSvgContent = function (file) {
	let relativeFilePath = `./page/images/${file}`;
	let data = fs.readFileSync(relativeFilePath, function (err, contents) {
		if (err) return err;
		return contents;
	});

	return data.toString("utf8");
};

module.exports = (eleventyConfig) => {
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
			.use(markdownItAbbr)
	);
	eleventyConfig.addPlugin(pluginTOC, {
		ul: "ol",
		flat: true,
	});
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addShortcode("svg", getSvgContent);
	eleventyConfig.addPassthroughCopy({ "./dist/style.css": "style.css" });
	eleventyConfig.addPassthroughCopy({ "./dist/style.css.map": "style.css.map" });
	eleventyConfig.addPassthroughCopy({ "./dist/base.css": "base.css" });
	eleventyConfig.addPassthroughCopy({ "./dist/base.css.map": "base.css.map" });

	return {
		dir: {
			input: "page",
			output: "dist_page",
		},
	};
};
