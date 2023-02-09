import React from 'react';

import { Header } from './Header';
import { Portfolio } from './Portfolio';
import { Speakers } from './Speakers';
import { Articles } from './Articles';
// import { PortfolioGrid } from './PortfolioList';

const [PORTFOLIO, SPEAKER, ARTICLE] = [0, 1, 2, 3];
const MODE = {
  '#portfolio': PORTFOLIO,
  '#speaker': SPEAKER,
  '#article': ARTICLE,
};

export default class Homepage extends React.Component {
  constructor() {
    super();

    this.state = {
      mode: 0, // 0=portfolio; 1=speaker; 2=article
    };
  }

  componentDidMount() {
    this.setState({ mode: MODE[window.location.hash] || 0 });
  }

  render() {
    return (
      <div>
        <Header onChanged={index => this.setState({ mode: index })} active={this.state.mode} />
        {this.state.mode === PORTFOLIO && <Portfolio />}
        {this.state.mode === SPEAKER && <Speakers />}
        {this.state.mode === ARTICLE && <Articles />}
      </div>
    );
  }
}
