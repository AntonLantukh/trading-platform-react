import React, { PureComponent } from 'react';
import Chart from 'react-google-charts';
import ErrorIndicator from '../../ErrorIndicator';


class MainChart extends PureComponent {
  render() {
    const { chartData, isFailure, error } = this.props;

    if (isFailure) {
      return <ErrorIndicator error={error} />
    }

    return (
        <Chart
          width={'800px'}
          height={400}
          chartType="CandlestickChart"
          data={chartData}
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
