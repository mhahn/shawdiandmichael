import Typography from "material-ui/Typography";

const Header = () => (
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

export default Header;
