import React, {PureComponent} from 'react';
import './style.css';

class Option extends PureComponent {
  render() {
    const {selectedValue, data, label, onSelectedValueChangeHandler} = this.props;
    const elms = Object.keys(data).map((item) => {
      return (
        <button
          key={item}
          type="button"
          className={`option ${selectedValue === item ? 'option-active' : ''} btn btn-${data[item]}`}
          onClick={() => onSelectedValueChangeHandler(label, item)}
        >
          {item}
        </button>
      )
    });
    return (
      <div className="option-group btn-group-vertical">
        <span className="option-value">{`${label}:`}</span>
        {elms}
      </div>
    )
  }
}

export default Option;
