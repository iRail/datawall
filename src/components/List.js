import React, {Component} from 'react';
import {connect} from 'react-redux';

import './List.css';

class List extends Component {

  renderQueries() {
    const {queries} = this.props;

    queries.reverse();

    return queries.map((query,index) => {
      const date = new Date(query.querytime);
      const time = {
        hours: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
        minutes: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
        seconds: date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      }
      return(
        <tr key={index}>
          <td>{time.hours}:{time.minutes}:{time.seconds}</td>
          <td>{query.origin.name}</td>
          <td>{query.destination.name}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <article>
        <h1>Live search queries <em>of iRail</em></h1>
        <table>
          <thead>
            <tr>
              <th>time</th>
              <th>departure</th>
              <th>destination</th>
            </tr>
          </thead>
          <tbody>
            {this.renderQueries()}
          </tbody>
        </table>
      </article>
    );
  }
}

function mapStateToProps(state) {
  return {queries: state.queries};
}

export default connect(mapStateToProps)(List);
