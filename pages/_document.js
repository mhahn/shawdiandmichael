import Document, { Head, Main, NextScript } from "next/document";
import { getContext, setContext } from "../styles/context";

export default class MaterialDocument extends Document {
  static async getInitialProps(ctx) {
    setContext();
    const page = ctx.renderPage();
    const context = getContext();
    return {
      ...page,
      styles: (
        <style
          id="jss-server-side"
          dangerouslySetInnerHTML={{
            __html: context.sheetsRegistry.toString()
          }}
        />
      )
    };
  }

  render() {
    const context = getContext();
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content={
              "user-scalable=0, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height"
            }
          />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:400,500|Sigmar+One"
            rel="stylesheet"
          />
          <link rel="icon" href="assets/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
