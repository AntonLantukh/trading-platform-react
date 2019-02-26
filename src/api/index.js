import {
  chartDataLoadedStart,
  chartDataLoadedSuccess,
  chartDataLoadedFailure
} from '../actions'

const myHeaders = new Headers();
myHeaders.append('x-api-key', 'kwwrsXS0t7BTfXJhbUE1440O0DEkMbo6EC9yCmd0');

const options = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

const herokuAccess = 'https://cors-anywhere.herokuapp.com/';

const fetchChartData = ({ exchange, pair, interval }) => (dispatch) => {
  dispatch(chartDataLoadedStart());
  fetch(`${herokuAccess}https://api.blockmarkets.io/v1/markets/${exchange}/${pair.replace(/\//, '-')}/ohlcv?interval=${parseInt(interval)}`, options)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data);
      if (data.result === 'error') {
        dispatch(chartDataLoadedFailure(data));
        return;
      }
      const chartData = data.data;
      dispatch(chartDataLoadedSuccess({chartData, interval}));
    })
    .catch((err) => {
      dispatch(chartDataLoadedFailure(err));
    })
};

export { fetchChartData };
