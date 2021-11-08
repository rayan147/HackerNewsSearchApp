import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from "../constants/news";

export const fetchNewsBySearch = (query) => async (dispatch, _, api) => {
  try {
    dispatch({
      type: FETCH_NEWS_REQUEST,
    });
    const { data } = await api.get(`search?query=${query}&tags=story`);
    dispatch({
      type: FETCH_NEWS_SUCCESS,
      payload: data.hits,
    });
  } catch (error) {
 
    dispatch({
      type: FETCH_NEWS_FAILURE,
      payload: error,
    });
  }
};
