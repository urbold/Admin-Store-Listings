import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Toolbar from "./Toolbar";
import { Divider, Fab, Tooltip } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import Stores from "./Stores";
import clsx from "clsx";
import SearchStore from "./Search";

/* function byUrl({ url }) {
  return (store, i, array) => {
    return store.url === url;
  };
} */

class StoreInterface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        {
          name: "Malcolm Taylor",
          status: "Launched",
          statusDate: "May, 15th, 2019",
          description: "Men's International Suits",
          screenshot: "https://placeimg.com/320/240/any"
        },
        {
          name: "Juluis Stephan",
          status: "Under Construction",
          statusDate: "May, 15th, 2019",
          description: "Men's Designer Appeal",
          screenshot: "https://placeimg.com/320/240/any"
        },
        {
          name: "Leona Stones",
          status: "Launched",
          statusDate: "May, 15th, 2019",
          description: "Luxury Gemstones Jewlery",
          screenshot: "https://placeimg.com/320/240/any"
        },
        {
          name: "Reach Bold",
          status: "Permananetly Closed",
          statusDate: "May, 15th, 2019",
          description: "Digital Marketing Firm",
          screenshot: "https://placeimg.com/320/240/any"
        },
        {
          name: "Leona Stones",
          status: "Launched",
          statusDate: "May, 15th, 2019",
          description: "Luxury Gemstones Jewlery",
          screenshot: "https://placeimg.com/320/240/any"
        }
      ]
    };
  }
  async createStore(data) {
    return await this.props.createStore(data);
  }
  addStore(store) {}
  removeStore(store) {}
  render() {
    let { state, props } = this,
      { stores } = state,
      { classes } = props;

    let searchProps = {
      label: "Search store name or ID",
      variant: "outlined"
    };
    return (
      <div id="store-interface" className={clsx(classes.root)}>
        <Toolbar />
        <Divider />
        <div className={classes.searchbar}>
          <SearchStore {...searchProps} />
          <span>Results: {stores.length}</span>
        </div>
        <Stores stores={stores} />
        <Tooltip title="Create New Store">
          <Fab size="large" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
    );
  }
}

export default withStyles(styles)(StoreInterface);
