import { Component } from "react";
import { shake } from "react-animations";
import classNames from "classnames";
import {
  MuiThemeProvider,
  withStyles,
  createMuiTheme
} from "material-ui/styles";
import { grey } from "material-ui/colors";
import TextField from "material-ui/TextField";
import Router from "next/router";
import fetch from "isomorphic-fetch";

const theme = outerTheme => {
  const theme = createMuiTheme({
    ...outerTheme,
    palette: {
      ...outerTheme.palette,
      text: {
        ...outerTheme.palette.text,
        primary: outerTheme.palette.offWhite
      },
      primary: {
        ...outerTheme.palette.primary,
        A700: outerTheme.custom.offWhite
      },
      input: {
        ...outerTheme.palette.input,
        bottomLine: outerTheme.custom.offWhite,
        labelText: outerTheme.custom.offWhite,
        bottomText: outerTheme.custom.offWhite,
        inputText: outerTheme.custom.offWhite,
        helperText: outerTheme.custom.offWhite
      }
    }
  });
  return theme;
};

const styles = {
  container: {
    position: "relative"
  },
  textField: {
    width: 300
  },
  helperText: {
    fontSize: 16
  },
  "@keyframes shake": shake,
  shake: {
    animationName: "shake",
    animationDuration: ".8s"
  }
};

class Auth extends Component {
  state = {
    password: "",
    error: false
  };

  handleChange = event => {
    const password = event.target.value;
    this.setState({ password: event.target.value });
  };

  handleKeyDown = async event => {
    if (event.key === "Enter") {
      this.setState({ error: false });

      const res = await fetch("/api/v1/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ password: this.state.password }),
        credentials: "same-origin"
      });

      const json = await res.json();
      this.setState({ error: !json.ok });
    }
  };

  render() {
    const { password, error } = this.state;
    const { className, classes } = this.props;

    return (
      <div className={className}>
        <MuiThemeProvider theme={theme}>
          <div className={classes.container}>
            <TextField
              className={classNames(classes.textField, {
                [classes.shake]: error
              })}
              type="password"
              helperText="Password"
              helperTextClassName={classes.helperText}
              value={password}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              autoFocus={true}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(Auth);
