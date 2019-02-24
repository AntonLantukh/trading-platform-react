import React, { PureComponent } from 'react';
import './style.css';

class Pairs extends PureComponent {
  render() {
    const { pair, onPairChangeHandler } = this.props;
    const currencies = {
      'BTC/USD': 'primary',
      'ETH/USD': 'secondary',
      'XRP/USD': 'success',
      'EOS/USD': 'warning',
      'ETC/USD': 'info',
    };

    const pairsElms = Object.keys(currencies).map((item) => {
      return (
        <button
          key={item}
          type="button"
          className={`pair ${pair === item ? 'pair-active' : ''} btn btn-${currencies[item]}`}
          onClick={() => onPairChangeHandler(item)}
        >
          {item}
        </button>
      )
    });
    return (
      <div className="btn-group-vertical">
        {pairsElms}
      </div>
    )
  }
}

export default Pairs;
