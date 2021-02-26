import React, { useState } from 'react'
import { connect } from 'react-redux'
import MoviesCard from './MoviesCard'
import { FavMovies, Delete } from '../actions/searchActions'
import Fav from './Fav'
function Movies(props) {
    const [fav, setFav] = useState([])
    const { movies } = props;
    const handlefavmovie = (movies) => {
        const newfav = [...fav, movies]
        const { movie } = props;
        setFav(newfav)
        if (movie?.length < 5) {
            props.FavMovies(movies)
        } else {
            alert("you cannot add more")
        }


    }
    const deletethisone = (id) => {
        props.Delete(id);
    }



    let content = '';
    content = movies?.length > 0 ? movies.map((movie, index) => (
        <MoviesCard key={index} handlefavmovie={handlefavmovie} movie={movie} />
    )) : null;



    return (
        <div className="container">
            <div className="row"><h1>
                Results list</h1>
            </div>

            <div className="row">

                {content}
            </div>



            <div className="row">
                <h1>
                    favourite list</h1>




                <Fav deletthisone={deletethisone} />

            </div>

        </div>
    )
}
const mapStatestoProps = state => ({
    movies: state.movies.movies,
    movie: state.movies.movie
})
export default connect(mapStatestoProps, { FavMovies, Delete })(Movies)
