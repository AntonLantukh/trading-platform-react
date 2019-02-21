const initialState = {
  isFetching: true,
  isFailure: false,
  error: null,
  interval: {
    '1m': [],
    '5m': [],
    '1h': [],
    '1d': [],
  }
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_CHART_INIT':
      return {
        ...state,
        isFetching: true,
        isFailure: true,
      };

    case('FETCH_CHART_SUCCESS') :
      return {
        ...state,
        interval: {
          ...state.interval,
          [payload.interval]: payload.chartData,
        },
        isFetching: false,
      };

    case('FETCH_CHART_FAILURE') :
      return {
        ...state,
        isFetching: false,
        isFailure: true,
        error: payload,
      };

    default :
      return state;
  }
};

export default reducer;
