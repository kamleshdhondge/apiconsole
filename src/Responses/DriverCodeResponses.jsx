import React from "react";
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
    reponsesgeneral: {
        'box-sizing': 'border-box',
        'display': 'inline-flex',
        'font-size': '11px',
        'font-weight': '700',
        'line-height': '1',
        'max-width': '200px',
        'text-transform': 'uppercase',
        'vertical-align': 'baseline',
        'white-space': 'nowrap',
        'border-radius': '3px',
        'padding': '2px 4px 3px',
        width: 100,
        height: 20
    },
    reponses200: {
        'background-color': 'rgb(227, 252, 239)',
        color: 'rgb(0, 102, 68)'
    },
    reponses400: {
        'background-color': 'rgb(255, 240, 179)',
        color: 'rgb(23, 43, 77)'
    },
    divTabs: {
        width: 400,
        height: 50
    }
}));
export default function DriverCodeResponses() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const theme = useTheme();
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        <>
            <Typography variant="h6" >
                Responses
            </Typography>

            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="standard"

            >
                <Tab label="200" className={classes.reponses, classes.reponses200}{...a11yProps(0)} />
                <Tab label="401" className={classes.reponses}{...a11yProps(1)} />
                <Tab label="404" className={classes.reponses}{...a11yProps(2)} />
            </Tabs>

            <TabPanel value={value} index={0} dir={theme.direction}>
                Returned if request is <strong>successfull</strong>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                Returned if request is <strong>not authorized</strong>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                Returned if request <strong>API URL</strong>  is invalid
            </TabPanel>
        </>
    );
}
