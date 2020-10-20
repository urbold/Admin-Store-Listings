import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import styles from "./styles";
import { Divider, IconButton, Icon, Tabs, Tab } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

function getControls(control, i) {}

class InterfaceToolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appName: "Stores",
      section: "Listings",
      controllers: [],
      filter: {
        state: 0
      }
    };
  }
  filterListings(e, stat) {
    this.setState({ filter: { state: stat } });
  }
  render() {
    let { props, state } = this,
      { appName, section, controllers } = state,
      { classes } = props,
      { filter } = state,
      { state: filterState } = filter;

    return (
      <Toolbar className={clsx(classes.root)}>
        <Typography className={clsx(classes.interfaceName)} component="h2">
          {appName + " | " + section}
        </Typography>
        <Tabs
          value={filterState}
          centered
          className={classes.filters}
          onChange={this.filterListings.bind(this)}
          classes={{ flexContainer: classes.flexContainer }}
          textColor="secondary"
        >
          <Tab label="All Stores" disableRipple disableTouchRipple />
          <Tab label="Launched" disableRipple disableTouchRipple />
          <Tab label="Under Construction" disableRipple disableTouchRipple />
          <Tab label="Permanently Closed" disableRipple disableTouchRipple />
        </Tabs>
        <div className={classes.controls}>
          <IconButton>
            <Icon
              className={clsx("fas", "fa-th-list")}
              component="i"
              fontSize="small"
            />
          </IconButton>
          <IconButton>
            <Icon
              className={clsx("fas", "fa-th-large")}
              component="i"
              fontSize="small"
            />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <Divider />
        <div id="interface-controllers">{controllers.map(getControls)}</div>
      </Toolbar>
    );
  }
}

export default withStyles(styles)(InterfaceToolbar);
