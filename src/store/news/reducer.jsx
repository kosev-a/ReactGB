import {
  GET_NEWS_FAILURE,
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
} from './actions';

import { FETCH_STATUSES } from '../../utils/constants';

const initialState = {
  dataObj: [],
  error: null,
  status: FETCH_STATUSES.IDLE,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_REQUEST: {
      return {
        ...state,
        error: null,
        status: FETCH_STATUSES.REQUEST,
      };
    }
    case GET_NEWS_SUCCESS: {
      return {
        ...state,
        dataObj: action.payload,
        status: FETCH_STATUSES.SUCCESS,
      };
    }
    case GET_NEWS_FAILURE: {
      return {
        ...state,
        status: FETCH_STATUSES.FAILURE,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
