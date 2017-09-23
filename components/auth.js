import {
  MuiThemeProvider,
  withStyles,
  createMuiTheme
} from "material-ui/styles";
import { grey } from "material-ui/colors";
import TextField from "material-ui/TextField";

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
  }
};

const Auth = ({ className, classes }) => (
  <div className={className}>
    <MuiThemeProvider theme={theme}>
      <div className={classes.container}>
        <TextField
          className={classes.textField}
          type="password"
          helperText="Password"
          helperTextClassName={classes.helperText}
          autoFocus={true}
        />
      </div>
    </MuiThemeProvider>
  </div>
);

export default withStyles(styles)(Auth);
