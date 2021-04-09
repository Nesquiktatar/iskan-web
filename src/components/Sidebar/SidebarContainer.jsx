import React from 'react';
import {connect} from 'react-redux';
import Sidebar from './Sidebar';
import {logout} from '../../dataredux/auth-reducer';

class SidebarContainer extends React.Component {

    render() {
        return (
            <Sidebar {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    sidebarPage: state.sidebarPage,
    profile: state.profilePage.profile,
    themes: state.appPage.themes
})

export default connect (mapStateToProps, {logout}) (SidebarContainer);