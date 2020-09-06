import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ParameterComponent from './ParameterComp'
var ioFormatJson = [{
    type: 'path',
    name: 'parameterName',
    isRequired: 'true',
    dataype: 'string',
    validExamples: ' 2011-01-2020'
},
{
    type: 'body',
    name: 'parameterName2',
    isRequired: 'true',
    dataype: 'string2',
    validExamples: ' 2011-01-20202'
}
];
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 'max-content',
    },
    ioformat: {
        margin: 10
    }
}));
export default function IOFormat(props) {
    const classes = useStyles();

    const getParamComponentAsPerType = (eachParamObject, typeOfParam) => {
        debugger;
        if (typeOfParam == eachParamObject.type) {
            return (
                <ParameterComponent {...eachParamObject} />
            );
        }
    }

    return (
        <>
            <Card variant="elevation" className={classes.root} >
                <CardContent >
                    <Typography variant="h6" className={classes.ioformat} >
                        Request
                    </Typography>

                    <Typography variant="h6" className={classes.ioformat} >
                        Path Parameters  [Optional]
                        
                    </Typography>
                    {ioFormatJson.map(apidataobj => getParamComponentAsPerType(apidataobj,"path"))}
                 
                    <Typography variant="h6" className={classes.ioformat} >
                        Body Parameters
                    </Typography>
                    {ioFormatJson.map(apidataobj => getParamComponentAsPerType(apidataobj,"body"))}
                 

                </CardContent >
            </Card>
        </>
    );
}