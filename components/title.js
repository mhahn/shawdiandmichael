import Typography from "material-ui/Typography";
import { withTheme } from "material-ui/styles";

const Title = ({ theme }) => (
  <div style={{ color: theme.custom.offWhite }}>
    <Typography
      type="display3"
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

export default withTheme(Title);
