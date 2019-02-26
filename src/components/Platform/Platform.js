import React, {Component} from 'react';
import {fetchChartData} from '../../api';
import {connect} from 'react-redux';
import Options from './Options';
import MainChart from './MainChart';
import './style.css';

const mapDispatchToProps = {
  fetchChartData
};

const mapStateToProps = ({chartData, isFetching, isFailure, error}) => ({
  chartData,
  isFetching,
  isFailure,
  error,
});

class Platform extends Component {
  constructor() {
    super();
    this.state = {
      exchange: 'KRKN',
      pair: 'BTC/USD',
      interval: '1M',
    }
  }

  componentDidMount() {
    this.generateChartDataRequest();
  };

  generateChartDataRequest = () => {
    const {exchange, pair, interval} = this.state;
    const {fetchChartData} = this.props;
    fetchChartData({exchange, pair, interval});
  };

  onSelectedValueChangeHandler = (stateKey, item) => {
    this.setState({
        [stateKey]: item,
      }, this.generateChartDataRequest,
    );
  };

  render() {
    const {pair, interval, exchange} = this.state;
    const {chartData, isFetching, error, isFailure} = this.props;

    return (
      <div className={`platform ${isFetching ? 'loader' : ''}`}>
        <Options
          pair={pair}
          interval={interval}
          exchange={exchange}
          onSelectedValueChangeHandler={this.onSelectedValueChangeHandler}
        />
        <div className="platform-chart">
          <MainChart
            chartData={chartData}
            error={error}
            isFailure={isFailure}
          />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Platform);
