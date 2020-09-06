import React from "react";
import ApiCard from "./ApiCard";
import { Grid } from "@material-ui/core";
import apiList from "./APIData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 20,
    maxWidth: 500
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
    marginBottom: 6
  },
  divPad: {
    marginLeft: 6
  }
});
const Content = (props) => {
  const classes = useStyles();

  const { typeOfCard } = props;
  console.log(typeOfCard + " typeOfCard");
  const getAPICards = apidataobj => {
    if (apidataobj.APICategory == typeOfCard) {
      return (
        <Grid item>
          <ApiCard {...apidataobj} />
        </Grid>
      );
    }

  };

  return (

    <Grid container direction="column" spacing={2}>
      {apiList.map(apidataobj => getAPICards(apidataobj))}
    </Grid>

  );
};

export default Content;
