import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 'max-content',
    },
    ioformat: {
        margin: 10
    }
}));
export default function ParameterComponent(props) {
    const classes = useStyles();
    const { parameterName, isRequired, datatype, valid_examples } = props;
    let isRequiredComp = null;
    if (isRequired) {
        debugger;
        isRequiredComp = <div color='grey'>REQUIRED</div>
    }
    return (
        <>
            <Typography variant="h6" className={classes.ioformat} >
                {parameterName}
                {isRequiredComp}
            </Typography>
            <Typography variant="h6" className={classes.ioformat} >
                {datatype}
            </Typography>

            <Typography variant="h6" className={classes.ioformat} >
                Valid examples: {valid_examples}
            </Typography>
        </>
    )
}