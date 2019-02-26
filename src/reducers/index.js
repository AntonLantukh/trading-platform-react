import moment from 'moment';

const initialState = {
  isFetching: true,
  isFailure: false,
  error: null,
  chartData: [],
};

const processChartData = (data) => {
  const finalData = [];
  const labels = ['price', 'open', 'high', 'low', 'close'];
  const values =['time_start', 'open', 'high', 'low', 'close'];
  finalData.push(labels);

  Object.values(data).reverse().forEach((item) => {
    let array = [];
    values.forEach((value) => {
      if (value === 'time_start') {
        array.push(moment(item[value]).format('LT'));
        return
      }
      array.push(item[value]);
    });
    finalData.push(array);
    array = [];
  });

  return finalData;
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_CHART_INIT':
      return {
        ...state,
        isFetching: true,
        isFailure: false,
      };

    case('FETCH_CHART_SUCCESS') :
      return {
        ...state,
        chartData: processChartData(payload.chartData),
        isFetching: false,
      };

    case('FETCH_CHART_FAILURE') :
      return {
        ...state,
        isFetching: false,
        isFailure: true,
        error: payload.message,
      };

    default :
      return state;
  }
};

export default reducer;
