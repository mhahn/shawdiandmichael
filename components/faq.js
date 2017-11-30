import { Component } from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

const styles = theme => ({
  container: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  answer: {
    maxWidth: 600
  }
});

const FAQ = ({ classes, question, answer }) => (
  <div className={classes.container}>
    <Typography align="center" type="title" gutterBottom>
      {question}
    </Typography>
    <div className={classes.answer}>
      {typeof answer === "string" ? (
        <Typography align="center" type="body1" gutterBottom>
          {answer}
        </Typography>
      ) : (
        answer
      )}
    </div>
  </div>
);

export default withStyles(styles)(FAQ);
