const esbuild = require("esbuild");

const watchFlag = process.argv.indexOf("--watch") > -1;
const minifyFlag = process.argv.indexOf("--minify") > -1;

const opts = {
	entryPoints: ["./css/all.css", "./css/base.css", "./css/themes/*.css"],
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
