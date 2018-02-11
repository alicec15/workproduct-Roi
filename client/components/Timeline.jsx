import React from 'react';
import ReactDOM from 'react-dom';

import HorizontalTimelineContent from './HorizontalTimelineContent';
import GameInfo from '../resources/content';

// import 'bootstrap-webpack';

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, previous: 0 };
  }

  componentWillMount() {
    this.data = GameInfo.map((game, index) => {
      return ({
        date: game.date,
        title: game.title,
        component: (
          <div className='container' key={index}>
            <h1>{ `The Elder Scrolls ${index + 1}:`}</h1>
            <h2>{ game.subtitle }</h2>
            <hr />
            <p>{ game.content}</p>
            <hr />
          </div>
        )
      });
    });
  }

  render() {
    return (
      <HorizontalTimelineContent
        content={this.data} />
    );
  }
}