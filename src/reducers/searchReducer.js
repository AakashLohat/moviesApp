import { SEARCH_MOVIE } from '../actions/types'
import { FETCH_MOVIES } from '../actions/types'
import { FAV_MOVIES } from '../actions/types'
import { DELETE } from '../actions/types';
const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: []
}
export default function(state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false,
            };
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };
        case DELETE:
            return {
                ...state,
                movie: state.movie.filter((ans, i) => i != action.payload)
            };
        case FAV_MOVIES:
            var newarr = [...state.movie, action.payload]






            return {
                ...state,
                movie: newarr,


            }



        default:
            return state
    }
}