import React from 'react';
import {addPost} from '../../../../dataredux/profile-reducer';
import UserPosts from './UserPosts';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        themes: state.appPage.themes
    }
}

const UserPostsContainer = connect(mapStateToProps,
    {addPost})
(UserPosts)

export default UserPostsContainer;