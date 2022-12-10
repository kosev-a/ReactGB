import { FETCH_STATUSES } from '../../utils/constants';

export const selectNews = (state) => state.news.dataObj;
export const selectNewsLoading = (state) =>
  state.news.status === FETCH_STATUSES.REQUEST;
export const selectError = (state) => state.news.error;
