import React, { Component } from 'react';
import { Link } from 'gatsby';
import Sitedata from "../database/site-details.json"

class Header extends Component {

  constructor() {
    super();
    this.state = {
      HeaderDataMain: []
    };
  }

  render() {
    var HomeData = this.state.HeaderDataMain;


    const listItems = Sitedata.map((sitedatamain) =>
      <div key="siteheader">
        <div class="logo">
          <Link to="/">{sitedatamain.SiteName}</Link>
        </div>
      </div>
    );
    return (
      <div className="Header">
        <div className="container">
            {listItems}
        </div>
      </div>
    );
  }
}

export default Header
