import React from 'react'
import PropTypes from 'prop-types';
const UserItem = ( { user : {login , avatar_url , html_url } }) => {
        return (
             <div className="card text-centre">
            <img 
            src={avatar_url} 
            alt=''
            className='round-img' 
            style = {{width: '60px'}}
            />
            <h3>{login}</h3>
            <div>
            <a href ={html_url} className="btn btn-dark btn-sm my-1">
            More
            </a>
            </div> 
            </div>
        );
}
export default UserItem
UserItem.propTypes = {
    user : PropTypes.object.isRequired,
}
/*
import React, { Component } from 'react'
earlier i was using classes. but 
import React, { Component } from 'react'
class UserItem extends Component {
    state={
        id='id',
        login='mojombo'
        avatar_url='',
        html_url=''
    };
    render() {
        const {login , avatar_url , html_url } = this.props.user;
        return (
            <div className="card text-centre">
            <img 
            src={avatar_url} 
            alt=''
            className='round-img' 
            style = {{width: '60px'}}
            />
            <h3>{login}</h3>
            <div>
            <a href ={html_url} className="btn btn-dark btn-sm my-1">
            More
            </a>
            </div> 
            </div>
        );
    }
}
export default UserItem
*/