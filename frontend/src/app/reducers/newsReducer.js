import {FETCH_NEWS_REQUEST,FETCH_NEWS_SUCCESS,FETCH_NEWS_FAILURE} from '../constants/news'

const initialState = {
    data: [],
    status: 'pending',
    error: null
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS_REQUEST:
            return {
                ...state,
                status: 'pending'
            };

        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                status: 'success'
            };
        case FETCH_NEWS_FAILURE:
            return {
                ...state,
                status: 'failure',
                error: action.payload
            };
        default:
            return state;
    }
}
export default newsReducer;