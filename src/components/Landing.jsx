import React from 'react'
import Searchform from './Searchform'
import { connect } from 'react-redux'
import Spinner from './Spinner';
import Movies from './Movies';
function Landing(props) {
    const { loading } = props;
    return (
        <div className="container ">
            <Searchform />
            {loading ? <Spinner /> : <Movies />}
        </div>

    )
}
const mapStatestoProps = state => ({
    loading: state.movies.loading
})
export default connect(mapStatestoProps)(Landing)
