import React, { PureComponent } from 'react';
import Chart from 'react-google-charts';

class MainChart extends PureComponent {
  render() {
    return (
      <Chart
        width={'900px'}
        height={400}
        chartType="CandlestickChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['day', 'a', 'b', 'c', 'd'],
          ['Mon', 20, 28, 38, 45],
          ['Tue', 31, 38, 55, 66],
          ['Wed', 50, 55, 77, 80],
          ['Thu', 77, 77, 66, 50],
          ['Fri', 68, 66, 22, 15],
        ]}
        options={{
          legend: 'none',
          animation: {
            duration: 1000,
            easing: 'out',
            startup: true,
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    )
  }
}

export default MainChart;
