export default function ({ title, children, meta, comp }) {
  const title_suffix = title ? ` | ${title}` : "";
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="WYeZs0gu8iEOBd-Ez6pyfCsD8gFgq9NG8wjd4KaXGyE"
        />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <title>Freestyle Movement{title_suffix}</title>
      </head>
      <body class="bg-gray-200 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        {children}
        <comp.facebook_chat />
        <comp.google_analytics />
      </body>
    </html>
  );
}
