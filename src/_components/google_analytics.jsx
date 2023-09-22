export default function () {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FJCGDSSNVE"
      >
      </script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date()); 
                gtag('config', 'G-FJCGDSSNVE');
            `,
        }}
      />
    </>
  );
}
