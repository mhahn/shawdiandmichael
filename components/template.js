import Head from "next/head";
import { withStyles } from "material-ui/styles";

import HeaderTitle from "./header-title";
import HeaderNav from "./header-nav";
import Footer from "./footer";

const styles = theme => ({
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column",
    position: "relative",
    minHeight: "100vh",
    width: "100%"
  },
  body: {
    marginBottom: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column"
  },
  root: {
    margin: 10
  }
});

const Template = ({ title, classes, children, pathname }) => (
  <div className={classes.root}>
    <Head>
      <title>{title}</title>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5CDML8P');`
        }}
      />
    </Head>
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5CDML8P"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`
      }}
    />
    <div className={classes.content}>
      <HeaderTitle />
      <HeaderNav pathname={pathname} />
      <div className={classes.body}>{children}</div>
    </div>
    <Footer />
  </div>
);

export default withStyles(styles)(Template);
