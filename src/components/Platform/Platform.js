import React, {Component} from 'react';
import {fetchChartData} from '../../api';
import {connect} from 'react-redux';
import Pairs from './Pairs';
import Intervals from './Intervals';
import MainChart from './MainChart';

const mapDispatchToProps = {
  fetchChartData
};

class Platform extends Component {
  constructor() {
    super();
    this.state = {
      exchange: 'STMP',
      pair: 'BTC/USD',
      interval: 1,
    }
  }

  componentDidMount() {
    const {exchange, pair, interval} = this.state;
    const { fetchChartData } = this.props;
    fetchChartData({exchange, pair, interval});
  };

  onPairChangeHandler = (item) => {
    this.setState(() => {
      return {
        pair: item,
      }
    })
  };

  onIntervalChangeHandler = (item) => {
    this.setState(() => {
      return {
        interval: item,
      }
    })
  };

  render() {
    const {pair, interval} = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <Pairs pair={pair} onCurrencyChangeHandler={this.onPairChangeHandler}/>
              <MainChart/>
            </div>
          </div>
          <Intervals interval={interval} onFrameChangeHandler={this.onIntervalChangeHandler}/>
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Platform);
