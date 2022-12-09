import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en' className='dark'>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap' rel='stylesheet' />
      </Head>
      <body className='bg-white dark:bg-gray-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
