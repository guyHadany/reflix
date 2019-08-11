import React, { Component } from 'react';
import Movie from './Movie';

class Catalog extends Component {

    constructor() {
        super()
        this.state = {
            movieName: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            movieName: e.target.value
        })
    }

    render() {
        return (
            <div className="catalogSection">
                <div className="inputAndBudjet">
                    <input type="text" placeholder="Search Movie..." onChange={this.handleChange}></input>
                    <span id="budget">Budget: {this.props.user.budget}$</span>
                </div>

                {this.props.user.rented.length > 0 ? <div className="movieSection">
                    <div className="header">Rented:</div>
                    <div className="movies">
                        {this.props.user.rented.filter(m => m.title.toLowerCase().includes(this.state.movieName.toLowerCase())).map((m, i) => <Movie movie={m} key={i} isRented={true} user={this.props.user} rentMovie={this.props.rentMovie} returnMovie={this.props.returnMovie}/>)}
                    </div>
                </div> : null}





                <div className="movieSection">
                    <div className="header">Catalog:</div>
                    <div className="movies">
                        {this.props.movies.filter(m => m.title.toLowerCase().includes(this.state.movieName.toLowerCase())).map(m => <Movie movie={m} key={m.id} user={this.props.user} isRented={this.props.user.rented.find(r => r.id === m.id)} rentMovie={this.props.rentMovie} returnMovie={this.props.returnMovie}/>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Catalog