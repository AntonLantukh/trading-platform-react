import React from 'react';
import './style.css';

const Journal = () => {
  return (
    <div className="journal">
      <table className="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Instrument</th>
          <th scope="col">Direction</th>
          <th scope="col">Price</th>
          <th scope="col">Volume</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>BTCUSD</td>
          <td>Buy</td>
          <td>2982.35</td>
          <td>0.01</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>BTCUSD</td>
          <td>Sell</td>
          <td>2972.42</td>
          <td>0.56</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>BTCUSD</td>
          <td>Buy</td>
          <td>2983.56</td>
          <td>1.22</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
};

export default Journal;
