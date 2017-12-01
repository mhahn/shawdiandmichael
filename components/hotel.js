import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";

const styles = theme => ({
  root: {
    padding: 30,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f4f4f4"
    }
  },
  img: {
    objectFit: "cover",
    width: "100%",
    height: "100%"
  },
  imgContainer: {
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
    height: 250
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingTop: 30
  }
});

const Hotel = ({ classes, name, children, img: imgName, href }) => (
  <Grid item sm={6} xs={12}>
    <div className={classes.root} onClick={() => window.open(href, "_blank")}>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={`/assets/img/${imgName}`} />
      </div>
      <div className={classes.textContainer}>
        <Typography type="title" align="center">
          {name}
        </Typography>
        <br />
        <Typography align="center">{children}</Typography>
      </div>
    </div>
  </Grid>
);

export default withStyles(styles)(Hotel);
