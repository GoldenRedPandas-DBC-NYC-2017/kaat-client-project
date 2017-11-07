import React, { Component } from 'react';
import './App.css';
import './template-style/css/bootstrap.min.css';
import './template-style/css/mdb.min.css';
import Item from './item';
import {Link} from 'react-router-dom';

class Appetizers extends Component {
  render() {
    let apps = [{
        name: 'foo',
        link: 'bar'
    },
    {

    }]
    return (
      <div className="view-other hm-black-light">
        <br/>
        <h2>Appetizers</h2>
        <br/>
          <ul className="ul-no-bullet">
          { ["appetizer1", "appetizer2", "appetizer3", "appetizer4"].map((item, index) => {
              return (
                <Item
                  data={[1, item, (index + 1)]}
                />
              )
            })}
          </ul>
          <Link className="nav-link waves-effect waves-light" to="/categories">Back to list of categories</Link>
      </div>
    );
  }
}

export default Appetizers;
