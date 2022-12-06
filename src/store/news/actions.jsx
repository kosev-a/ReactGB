export const GET_NEWS_REQUEST = 'NEWS::GET_NEWS_REQUEST';
export const GET_NEWS_SUCCESS = 'NEWS::GET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'NEWS::GET_NEWS_FAILURE';

const apiUrl = 'https://inshorts.deta.dev/news?category=science';
// data format like this: 
// {"category":"science",
// "data":
//   [{"author":"Pragya Swastik",
//     "content":"Almost...",
//     "date":"29 Nov 2022,Tuesday",
//     "id":"7042b49c91a449ef81c8077c2b3e9a98",
//     "imageUrl":"https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/11_nov/29_tue/img_1669741697999_667.jpg?",
//     "readMoreUrl":"https://www.nature.com/articles/s41467-022-34250-4?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
//     "time":"10:50 pm","title":"Air pollution linked to 10 lakh stillbirths a year worldwide, including India: Study",
//     "url":"https://www.inshorts.com/en/news/air-pollution-linked-to-10-lakh-stillbirths-a-year-worldwide-including-india-study-1669742458060"},
//     {...}, ...]

export const getNewsRequest = () => ({
  type: GET_NEWS_REQUEST,
});

export const getNewsSuccess = (news) => ({
  type: GET_NEWS_SUCCESS,
  payload: news,
});

export const getNewsFailure = (error) => ({
  type: GET_NEWS_FAILURE,
  payload: error,
});

export const getNews = () => async (dispatch) => {
  dispatch(getNewsRequest());

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const result = await response.json();
    dispatch(getNewsSuccess(result));
  } catch (err) {
    dispatch(getNewsFailure(err));
    console.warn(err);
  }
};
