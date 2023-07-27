import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="h-full bg-gray-900">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Unbounded&display=swap" rel="stylesheet" />
      </Head>
      <body className="h-full m-0 p-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
