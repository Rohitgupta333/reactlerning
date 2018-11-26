import React, { Component } from 'react';
import { Link } from 'gatsby';
import data from "../database/data.json"
import Image from '../components/image'

const numbers = [1, 2, 3, 4, 5];

const countries = [
    { name: "India", capital: "Delhi" },
    { name: "Belgium", capital: "Brussels" },
    { name: "France", capital: "Paris" },
    { name: "Greece", capital: "Athens" }
  ]

class Home extends Component {

  constructor() {
      super();
      this.state = {
          HomeDataMain: []
      };
  }

  render() {
      var HomeData = this.state.HomeDataMain;


      const listItems = data.map((finaledata) =>
        <div className="col-md-12 list-group-item" key={finaledata.id}>
            <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
                <Image />
            </div>
            <h2>{finaledata.title}</h2>
        </div>
      );
      return (
          <div className="Home">  
            <div className="container">
              <div className="">
                <h1>Home Listing</h1>
                <div className="list-group row">
                  {listItems}
                </div>
              </div>
            </div>
          </div>
      );
  }
}

export default Home
