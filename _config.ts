import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import minify_html from "lume/plugins/minify_html.ts";
import sitemap from "lume/plugins/sitemap.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  src: "./src",
  location: new URL("https://freestylemovement.ca"),
});

site.use(jsx_preact());
site.use(minify_html());
site.use(sitemap());
site.use(tailwindcss({
  extensions: [".html", ".jsx", ".tsx"],
  options: {
    safelist: [
      "font-mono",
      "font-bold",
      "mt-2",
      "gap-4",
      "border-l-2",
      "border-gray-300",
      "text-gray-300",
      "inline",
      "pl-2",
      "py-4",
      "text-sm",
      "leading-6",
      "whitespace-pre-wrap",
    ],
  },
}));
site.use(postcss());

// copy static files
site.copy([".jpg", ".gif", ".png", ".js"]);

export default site;
