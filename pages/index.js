import Head from "next/head";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import withStyles from "material-ui/styles";

import withRoot from "../components/withRoot";
import Background from "../components/background";
import Password from "../components/password";

const styles = {
  container: {
    textAlign: "center"
  },
  content: {
    paddingTop: "25%"
  }
};

let Header = ({ classes }) => (
  <div style={{ color: "#f2f2f2" }}>
    <Typography
      type="display4"
      gutterBottom
      color="inherit"
      style={{ fontFamily: "'Over the Rainbow', cursive" }}
    >
      Shawdi & Michael
    </Typography>
    <Typography
      type="display1"
      gutterBottom
      color="inherit"
      style={{ fontFamily: "'Over the Rainbow', cursive" }}
    >
      July 28, 2018 • Sonoma, CA
    </Typography>
  </div>
);

const page = () => (
  <Background>
    <div style={styles.container}>
      <div style={styles.content}>
        <Header />
      </div>
    </div>
  </Background>
);

export default withRoot(page);
