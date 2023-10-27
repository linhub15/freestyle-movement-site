export default function ({ title, children, meta, comp }) {
  const title_suffix = title ? ` | ${title}` : "";
  return (
    <html lang="en">
      <head>
        <comp.google_analytics />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <title>Freestyle Movement{title_suffix}</title>
      </head>
      <body class="bg-gray-900 text-gray-200 min-h-screen">
        {children}
        <div class="mb-20" id="facebook_chat_spacer">
          <comp.facebook_chat />
        </div>
      </body>
    </html>
  );
}
