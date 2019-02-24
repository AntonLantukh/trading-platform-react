import {
  chartDataLoadedStart,
  chartDataLoadedSuccess,
  chartDataLoadedFailure } from '../actions'

const fetchChartData = ({ exchange, pair, interval }) => (dispatch) => {
  dispatch(chartDataLoadedStart());
  fetch(`https://api.blockmarkets.io/v1/markets/${exchange}/${pair}/ohlcv?interval=${interval}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const chartData = data.data;
      dispatch(chartDataLoadedSuccess({chartData, interval}));
    })
    .catch((err) => {
      dispatch(chartDataLoadedFailure(err));
    })
}

export { fetchChartData };
