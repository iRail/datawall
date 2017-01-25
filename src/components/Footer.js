import React, {Component} from 'react';
import List from './List.js';

import './Footer.css';

export default class Footer extends Component {
  render() {
    return(
      <article>
        <h1>Live search queries <em>of iRail</em></h1>
        <List />
        <aside>
          <strong>See your own search appear in gold</strong>
          <em>Search on</em>
          <a href="https://irail.be">irail.be</a>
          <img src="#" alt="irail logo"/>
        </aside>
      </article>
    );
  }
}
