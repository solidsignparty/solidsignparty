import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html>
      <Head />
      <meta charSet="utf-8" />
      <title>SOLID SIGN</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:type" content="profile" />
      <meta property="og:title" content="Solid Sign" />
      <meta property="og:description" content="Hard Techno в Набережных Челнах" />
      <meta property="og:url" content="https://solidsign.ru" />
      <meta property="og:image" content="/logo.png" />
      <meta property="profile:first_name" content="Solid" />
      <meta property="profile:last_name" content="Sign" />
      <meta name="theme-color" content="#131313" />
      <meta name="description" content="" />
      <meta name="keywords" content="Techno" />
      <meta name="author" content="Solid Sign" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
