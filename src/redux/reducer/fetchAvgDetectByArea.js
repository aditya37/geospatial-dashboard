import {
  PROCESS_FETCH_AVG_DETECT_BY_AREA,
  SUCCESS_FETCH_AVG_DETECT_BY_AREA,
  FAILED_FETCH_AVG_DETECT_BY_AREA,
} from "../action/actions";

const initstate = {
  isLoading: false,
  message: "",
  labels: [],
  enter: [],
  exit: [],
  inside: [],
};

export default (state = initstate, action) => {
  switch (action.type) {
    case PROCESS_FETCH_AVG_DETECT_BY_AREA:
      return {
        ...state,
        isLoading: true,
        message:"fetching data"
      };
    case SUCCESS_FETCH_AVG_DETECT_BY_AREA:
      const _labels = [];
      const _enter = [];
      const _exit = [];
      const _inside = [];
      action.payload.datas.map((v) => {
        _labels.push(v.date);
        _enter.push(v.enter);
        _exit.push(v.exit);
        _inside.push(v.inside);
      });
      return {
        ...state,
        isLoading: false,
        labels: _labels,
        enter: _enter,
        exit: _exit,
        inside: _inside,
      };
    case FAILED_FETCH_AVG_DETECT_BY_AREA:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
