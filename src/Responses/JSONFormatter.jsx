import JSONPretty from 'react-json-pretty';
import React from "react";
import ReactJson from 'react-json-view'
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 'max-content',
    },
    ioformat: {
        margin: 10
    }
}));
const code = {
    "id": "1000",
    "isSystemAvatar": true,
    "isSelected": false,
    "isDeletable": false,
    "urls": {
        "16x16": "/secure/useravatar?size=xsmall&avatarId=10040&avatarType=project",
        "24x24": "/secure/useravatar?size=small&avatarId=10040&avatarType=project",
        "32x32": "/secure/useravatar?size=medium&avatarId=10040&avatarType=project",
        "48x48": "/secure/useravatar?avatarId=10040&avatarType=project"
    }
};
export default function JSONFormatter() {
    const classes = useStyles();
    return (
        <>
            <Card variant="elevation" className={classes.root} >
                <CardContent >
                    <Typography variant="h6" className={classes.ioformat} >
                        Sample Input
                    </Typography>


                    <Card variant="elevation" elevation={3} className={classes.root} >
                        <CardContent >
                            <ReactJson id="json-pretty" src={code} enableClipboard={false}></ReactJson>
                        </CardContent>
                    </Card>
                    <Typography variant="h6" className={classes.ioformat}>
                        Sample Output
                    </Typography>
                    <Card variant="elevation" elevation={5} className={classes.root} >
                        <CardContent >
                            <ReactJson id="json-pretty" src={code} enableClipboard={false}></ReactJson>
                        </CardContent>
                    </Card>

                </CardContent>
            </Card>

        </>
    );
}