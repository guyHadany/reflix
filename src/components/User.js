import React, { Component } from 'react';
import { Link} from 'react-router-dom'

class User extends Component {

    selectedUser = () => {
        this.props.selectedUser(this.props.user.id)

    }

    render() {
        let user = this.props.user
        return (
           
            <Link to='/Catalog'><span id='boxName' style={{backgroundColor: user.color}} onClick={this.selectedUser}>{user.name}</span></Link>
            
        )
    }
}

export default User