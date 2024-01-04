const esbuild = require("esbuild");

const watchFlag = process.argv.indexOf("--watch") > -1;
const minifyFlag = process.argv.indexOf("--minify") > -1;

const opts = {
	entryPoints: ["./css/style.css", "./css/base.css"],
	outdir: "dist",
	bundle: true,
	minify: minifyFlag,
	sourcemap: minifyFlag ? false : "both",
	loader: {
		".woff": "file",
		".woff2": "file",
	},
};

if (watchFlag) {
	esbuild.context(opts).then((ctx) => {
		ctx.watch();
	});
} else {
	esbuild.build(opts);
}