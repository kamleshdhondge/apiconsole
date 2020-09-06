import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 20,
    maxWidth: 600
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 12
  },
  pos: {
    marginBottom: 12
  },
  httpMethod: {
    color: "grey",
    display: "contents",
    fontSize: "medium"
  }
});

const ApiCard = (props) => {
  const classes = useStyles();
  const { apiUrl, title, description, ioformat, sampleio, drivercode } = props;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <div className={classes.httpMethod}>POST </div>   {apiUrl}
        </Typography>

        <Typography variant="body2" component="p">
          <br />
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="primary" size="small">
          Description
        </Button>
        <Button variant="outlined" color="primary" size="small">
          I/O Format
        </Button>
        <Button variant="outlined" color="primary" size="small">
          Sample IO
        </Button>
        <Button variant="outlined" color="primary" size="small">
          Driver Code
        </Button>
      </CardActions>
    </Card>
  );
};

export default ApiCard;
