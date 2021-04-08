import React from 'react';
import * as s from './Users.styles';
import userPhoto from '../../../assets/images/user.svg';
import {NavLink} from 'react-router-dom';
import Button from "../../common/Button/Button";

const User = ({user, followingInProgress, followThunk, unFollowThunk}) => {
    return (
        <s.User>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='User Photo'/>
                </NavLink>
            </div>
            <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
            </span>
            <s.Subscribe>
                {user.followed

                    ? <Button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unFollowThunk(user.id)
                    }} btnText='UnFollow'/>

                    : <Button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        followThunk(user.id)
                    }} btnText='Follow'/>
                }
            </s.Subscribe>

        </s.User>
    )
}

export default User;