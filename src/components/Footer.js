import React, {Component} from 'react';
import List from './List.js';

import './Footer.css';

export default class Footer extends Component {
  render() {
    return(
      <footer>
        <div>
          <h2>Live search queries <em>of iRail</em></h2>
          <List />
        </div>
        <aside>
          <strong><em>See your own search request appear in gold!</em></strong>
          <em>Search on</em>
          <a href="https://irail.be">irail.be</a>
          <img src="#" alt="irail logo"/>
        </aside>
      </footer>
    );
  }
}
