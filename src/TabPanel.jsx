import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Content from "./Content";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  content:{
    marginLeft: 20
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"

        value={value}
        onChange={handleChange}
        aria-label=""
        className={classes.tabs}
      >
        <Tab label="Baseline" {...a11yProps(0)} />
        <Tab label="Causality" {...a11yProps(1)} />
        <Tab label="Forecasting" {...a11yProps(2)} />
        <Tab label="Inventory" {...a11yProps(3)} />
        <Tab label="Optimization" {...a11yProps(4)} />
        <Tab label="Outlier" {...a11yProps(5)} />
        <Tab label="Similarity" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
       <div>
       <Content typeOfCard = "baseline"/>
       </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Content typeOfCard = "causality"/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Content typeOfCard = "forcasting"/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Content typeOfCard = "inventory"/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Content typeOfCard = "optimization"/>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Content typeOfCard = "outlier"/>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Content typeOfCard = "similarity"/>
      </TabPanel>
    </div>
  );
}