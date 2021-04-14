import React from 'react';
import * as s from './Login.styles';
import {reduxForm} from 'redux-form';
import {buildField, Input} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';
import {Redirect} from 'react-router';
import Button from "../../common/Button/Button";

const LoginForm = ({handleSubmit, error, captchaUrl, themes}) => {
    return (

        <form onSubmit={handleSubmit}>
            <s.Login themes={themes}>
                <span>LOGIN</span>
                <s.Email>Email: {buildField('Email', 'email', [required], Input)}</s.Email>
                <s.Password>Password: {buildField('Password', 'password', [required], Input, {type: 'password'})}</s.Password>
                <s.RememberMe>{buildField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}</s.RememberMe>

                
                    captchaUrl && <img src={captchaUrl} alt="captcha"/>}
                {captchaUrl && buildField('Enter symbols from image', 'captcha', [required], Input)}
                {error && <s.FormSummaryError>
                    {error}
                </s.FormSummaryError>}
                <Button btnText='Login'/>
            </s.Login>
        </form>

    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <>

            <LoginReduxForm themes={props.themes} onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </>
    )
}

export default Login;