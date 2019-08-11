import React, { Component } from 'react';
import User from './User';


class Landing extends Component {


    render() {
        let users = this.props.state.users
        return (
            <div id="home-container">
                <h1>Who's Watching?</h1>
                <div className='boxes'>
                    {users.map((a, i) =>
                        <User key={i} user={a} selectedUser={this.props.selectedUser} />)}
                </div>
            </div>
        )
    }
}
export default Landing