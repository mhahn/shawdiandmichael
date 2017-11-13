import { Component } from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

const styles = theme => ({
  container: {
    paddingTop: 30,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
});

const FAQ = ({ classes, question, answer }) => (
  <div className={classes.container}>
    <Typography align="center" type="title" gutterBottom>
      {question}
    </Typography>
    <Typography align="center" type="body1" gutterBottom>
      {answer}
    </Typography>
  </div>
);

export default withStyles(styles)(FAQ);
