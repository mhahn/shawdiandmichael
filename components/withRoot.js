import { Component } from "react";
import { JssProvider } from "react-jss";
import { withStyles, MuiThemeProvider } from "material-ui/styles";
import { getContext } from "../styles/context";

const styles = theme => ({
  "@global": {
    html: {
      background: theme.palette.background.paper,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale"
    },
    body: {
      margin: 0
    }
  }
});

let AppWrapper = props => props.children;

AppWrapper = withStyles(styles)(AppWrapper);

function withRoot(BaseComponent) {
  class WithRoot extends Component {
    static getInitialProps(ctx) {
      if (BaseComponent.getInitialProps) {
        return BaseComponent.getInitialProps(ctx);
      }

      return {};
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      const context = getContext();

      return (
        <JssProvider registry={context.sheetsRegistry} jss={context.jss}>
          <MuiThemeProvider
            theme={context.theme}
            sheetsManager={context.sheetsManager}
          >
            <AppWrapper>
              <BaseComponent />
            </AppWrapper>
          </MuiThemeProvider>
        </JssProvider>
      );
    }
  }

  WithRoot.displayName = `withRoot(${BaseComponent.displayName})`;

  return WithRoot;
}

export default withRoot;
