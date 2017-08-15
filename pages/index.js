import Head from "next/head";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

import withRoot from "../components/withRoot";

const styles = {
  container: {
    textAlign: "center",
    paddingTop: 200
  }
};

const page = () =>
  <div style={styles.container}>
    <Typography type="headline" gutterBottom>
      Boop
    </Typography>
  </div>;

export default withRoot(page);
