import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Movie extends Component {

    rentMovie = () => {
        this.props.user.budget < 3 ? 
        alert("not enough money!!!") : 
        this.props.rentMovie(this.props.movie.id, this.props.user.id, this.props.user.budget)
    }

    returnMovie = () => {
        console.log(this.props.user)
        this.props.returnMovie(this.props.movie.id, this.props.user.id, this.props.user.budget)
    }



    // returnMovie = () => {
    //     this.props.returnMovie(this.props.movie.id)
    // }
    // print = () => {
    //     console.log("hello")
    // }

    render() {


        return (
            
                <div className="movie"
                    style={{ backgroundImage: `url(${this.props.movie.img})` }} >
                    {this.props.isRented ?
                        <i className="fas fa-minus-circle" onClick={this.returnMovie}></i> :
                        <i className="fas fa-plus-circle" onClick={this.rentMovie}></i>}
                        <Link to={`/movies/${this.props.movie.id}`}><i class="fas fa-info-circle"></i></Link>
                </div>
            
        )
    }
}
export default Movie