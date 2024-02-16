import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import minify_html from "lume/plugins/minify_html.ts";
import sitemap from "lume/plugins/sitemap.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  src: "./src",
  location: new URL("https://freestylemovement.ca"),
});

site.use(esbuild({ extensions: [".tsx"] }));
site.use(jsx_preact({ extensions: [".jsx"] }));
site.use(minify_html());
site.use(sitemap());
site.use(tailwindcss({ extensions: [".html", ".jsx", ".tsx"] }));
site.use(postcss());

// copy static files
site.copy([".ico", ".jpg", ".gif", ".png", ".js", ".pdf"]);

export default site;
