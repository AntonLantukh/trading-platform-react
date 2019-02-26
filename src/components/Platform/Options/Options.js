import React, {Component} from 'react';
import Option from '../Option';
import './style.css';

const currencies = {
  'BTC/USD': 'primary',
  'ETH/USD': 'secondary',
  'XRP/USD': 'success',
  'LTC/USD': 'info',
};

const intervals = {
  '1M': 'primary',
  '5M': 'secondary',
  '1H': 'success',
  '1D': 'info',
};

const exchanges = {
  'KRKN': 'primary',
  'BNCE': 'secondary',
  'STMP': 'success',
  'HUOB': 'info',
};

class Options extends Component {
  render() {
    const {pair, interval, exchange, onSelectedValueChangeHandler} = this.props;

    return (
      <div className="options">
        <Option
          data={currencies}
          label="pair"
          selectedValue={pair}
          onSelectedValueChangeHandler={onSelectedValueChangeHandler}
        />
        <Option
          data={exchanges}
          label="exchange"
          selectedValue={exchange}
          onSelectedValueChangeHandler={onSelectedValueChangeHandler}
        />
        <Option
          data={intervals}
          label="interval"
          selectedValue={interval}
          onSelectedValueChangeHandler={onSelectedValueChangeHandler}
        />
      </div>
    )
  }
}

export default Options;
