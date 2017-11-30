import Head from "next/head";
import { withStyles } from "material-ui/styles";
import { Sticky, StickyContainer } from "react-sticky";

import HeaderTitle from "./header-title";
import HeaderNav from "./header-nav";

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
  stickyContainer: {
    width: "100%"
  },
  body: {
    marginBottom: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column"
  }
});

const Template = ({ title, classes, children, pathname }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <div className={classes.content}>
      <HeaderTitle />
      <HeaderNav pathname={pathname} />
      <div className={classes.body}>{children}</div>
    </div>
  </div>
);

export default withStyles(styles)(Template);
