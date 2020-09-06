import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DriverCodeResponses from './Responses/DriverCodeResponses'
import Paper from '@material-ui/core/Paper';
import CodeResponses from './Responses/CodeArea';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import JSONFormatter from './Responses/JSONFormatter'
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  roottab: {

    width: 10,
  },
  codeFont: {
    'font-weight': 'bold'
  }
}));

export default function DriverCode() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Card variant="elevation" className={classes.root} >
        <CardContent >
          <Typography variant="h6" >
            Example Code
        </Typography>

          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"

          >
            <Tab className={classes.roottab} label="cURL" {...a11yProps(0)} />
            <Tab label="Python" {...a11yProps(1)} />
          </Tabs>

          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Card variant="outlined"  >
                <CardContent>
                  <code className={classes.codeFont}> curl --request GET \
                  --url 'https://your-domain.atlassian.com/rest/api/3/filter' \
                  --user 'email@example.com:' \
                  --header 'Accept: application/json'
               </code>
                </CardContent>
              </Card>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Card variant="outlined"  >
                <CardContent className={classes.codeFont}>
                  <code>
                    import http.client            <br />
                import mimetypes    <br />
                conn = http.client.HTTPSConnection("localhost", 3000)<br />
                conn.request("GET", "/auth/signin", payload, headers)<br />
                res = conn.getresponse()<br />
                data = res.read()<br />
              print(data.decode("utf-8"))<br /></code>

                </CardContent>
              </Card>
            </TabPanel>
          </SwipeableViews >
          <DriverCodeResponses />
        </CardContent >
      </Card>
    </div >
  );
}