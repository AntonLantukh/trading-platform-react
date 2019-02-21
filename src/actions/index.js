const chartDataLoadedStart = () => {
  return {
    type: 'FETCH_CHART_INIT',
  }
};

const chartDataLoadedSuccess = (payload) => {
  return {
    type: 'FETCH_CHART_SUCCESS',
    payload,
  }
};

const chartDataLoadedFailure = (payload) => {
  return {
    type: 'FETCH_CHART_FAILURE',
    payload,
  }
};

export { chartDataLoadedStart, chartDataLoadedSuccess, chartDataLoadedFailure }
