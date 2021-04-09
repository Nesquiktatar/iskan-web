import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {login} from "../../../dataredux/auth-reducer";

class LoginContainer extends React.Component {
    render() {
        return(
            <Login {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    themes: state.appPage.themes,
    captchaUrl: state.auth.captchaUrl,
    isAuth:state.auth.isAuth
})

export default connect (mapStateToProps,{login})(LoginContainer)