import { SEARCH_MOVIE } from "./types"
import { FETCH_MOVIES } from "./types"
import { FAV_MOVIES } from "./types"
import { DELETE } from './types'
import axios from 'axios'
import { APIKey } from '../APIKEY'
export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}
export const Delete = id => dispatch => {
    dispatch({
        type: DELETE,
        payload: id
    })
}

export const fetchMovies = text => dispatch => {


    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`).then(response => dispatch({
        type: FETCH_MOVIES,
        payload: response.data.Search
    })).catch(error => { console.log(error) })


}
export const FavMovies = id => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`).then(response => dispatch({
        type: FAV_MOVIES,
        payload: response.data
    })).catch(error => { console.log(error) })
}