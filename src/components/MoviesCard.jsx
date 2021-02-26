import React, { useState } from 'react'
import { connect } from 'react-redux'
import { FavMovies } from '../actions/searchActions'
function MoviesCard({ movie, handlefavmovie }) {


    return (
        <div className="col-md-3 mb-5">
            <div className="card card-body bg-dark text-center h-100">
                <img className="w-100 mb-2" src={movie?.Poster} alt="Movie Cover" />
                <h5 className="text-light card-title">
                    {movie?.Title} - {movie?.Year}
                </h5>
                <button onClick={handlefavmovie.bind(this, movie.imdbID)} type="button" className="btn btn-primary">

                    Add to favourites
                </button>


            </div>
        </div>
    )
}


export default (MoviesCard)
