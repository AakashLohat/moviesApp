import React from 'react'
import { connect } from 'react-redux'
function Fav(props) {
    const { movie, deletthisone } = props
    return (
        <>
            {movie.map((and, ind) => (
                <div className="col-md-3 mb-5">


                    <div className="card card-body bg-dark text-center h-100">
                        <img className="w-100 mb-2" src={and?.Poster} alt="Movie Cover" />
                        <h5 className="text-light card-title">
                            {and?.Title} - {and?.Year}
                        </h5>
                        <button type="button" onClick={deletthisone.bind(this, ind)} className="btn btn-primary">
                            remove from favourite list
                </button>


                    </div>
                </div>
            ))}
        </>
    )
}

const mapStatestoProps = (state) => ({
    movie: state.movies.movie
})
export default connect(mapStatestoProps)(Fav)
