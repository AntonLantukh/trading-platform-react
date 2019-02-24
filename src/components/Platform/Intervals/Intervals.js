import React, { PureComponent } from 'react';
import './style.css';

class Intervals extends PureComponent {
  render() {
    const { interval, onIntervalChangeHandler } = this.props;
    const intervals = {
      '1M': 1,
      '5M': 5,
      '15M': 15,
      '30M': 30,
      '1H': 60,
      '1D': 1440,
    };

    const intervalsElms = Object.keys(intervals).map((item) => {
      return (
        <button
          key={item}
          type="button"
          className={`interval ${interval === intervals[item] ? 'interval-active' : ''} btn btn-secondary`}
          onClick={() => onIntervalChangeHandler(item)}
        >
          {item}
        </button>
      )
    });
    return (
      <div className="btn-group">
        {intervalsElms}
      </div>
    )
  }
}

export default Intervals;
