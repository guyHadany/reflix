import React, { Component } from 'react';

class MovieDetail extends Component {
    render() {
        let id = this.props.match.params.id
        return (
            <div className='MovieDetail'>
                <div>{this.props.movies[id].title} ({this.props.movies[id].year})</div>
                <img style={{height: '70vh', width: '70vh'}} src={this.props.movies[id].img} />
                <div>{this.props.movies[id].descrShort}</div>
            </div>
        )
    }
}
export default MovieDetail