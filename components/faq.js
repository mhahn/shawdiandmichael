import { Component } from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

class FAQ extends Component {
  state = { expanded: false };

  handleClickExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes, question, answer } = this.props;
    return (
      <div>
        <Typography type="title" gutterBottom>
          {question}
        </Typography>
        <Typography type="subheading" gutterBottom>
          {answer}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(FAQ);
