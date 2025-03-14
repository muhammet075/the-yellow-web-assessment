import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script async src="//Google tagmanager"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `//Google analytics`
        }}
      />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
