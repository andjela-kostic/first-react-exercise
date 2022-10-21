import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
    const {avatar_url, login, id} = user;
    return (
        <div className='cartItem'>
            <img src={avatar_url} />
            <p>{login}</p>
            <Link to={`/user/${login}`}>View profile</Link>
        </div>
    )
}

export default User;