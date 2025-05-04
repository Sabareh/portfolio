import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import { GA_TRACKING_ID } from '../lib/gtag'
import { getCssText, darkTheme, lightTheme } from '../stitches.config'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const lang = this.props.__NEXT_DATA__.props.pageProps?.post?.lang

    return (
      <Html lang={lang ? lang : 'en-US'}>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  const t = localStorage.getItem('theme') || 'light';
                  const classDark = '${darkTheme}';
                  const classLight = '${lightTheme}';
                  if (t === 'dark') {
                    document.documentElement.classList.add(classDark);
                    document.documentElement.classList.remove(classLight);
                  } else {
                    document.documentElement.classList.add(classLight);
                    document.documentElement.classList.remove(classDark);
                  }
                })();
              `,
            }}
          />
          <meta charSet="utf-8" />
          <meta content="Victor Sabare" name="author" />
          <meta property="og:type" content="website" />
          <meta content="summary_large_image" name="twitter:card" />
          <meta name="theme-color" content="#08070b" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

          <link
            rel="icon"
            href="/favicon.ico"
            sizes="any"
            type="image/x-icon"
          />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
            }}
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}
