import React from 'react'
import { connect } from 'react-redux'
import { searchMovie, fetchMovies } from '../actions/searchActions'
function Searchform(props) {
    const something = (e) => {
        props.searchMovie(e.target.value)

    }
    const onSubmit = (e) => {
        e.preventDefault()
        props.fetchMovies(props.text)
    }
    return (
        <div className="jumbotron jumbotron-fluid mt-5 text-center">
            <div className="container">
                <h1 className="display-4 mb-3">
                    <i className="fa fa-search" /> Search for a movie ,TV series ..
      </h1>
                <form id="searchForm" onSubmit={onSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        name="searchText"
                        placeholder="Search Movies, TV Series ..."
                        onChange={something}

                    />
                    <button type="submit" className="btn btn-primary btn-bg mt-3">
                        Search
        </button>
                </form>
            </div>
        </div>
    )
}
const mapStatestoProps = state => ({
    text: state.movies.text
})
export default connect(mapStatestoProps, { searchMovie, fetchMovies })(Searchform)
