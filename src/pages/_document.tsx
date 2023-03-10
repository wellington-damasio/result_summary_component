import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@/styles'
import { globalStyles } from '@/styles/globals'

globalStyles()

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}}></style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
