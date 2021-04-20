import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {withSuspense} from './hoc/withSuspense';

//Components
import DialogsContainer from './components/MainView/Dialogs/DialogsContainer';
import ProfileContainer from './components/MainView/Profile/ProfileContainer';
import UsersContainer from "./components/MainView/Users/UsersContainer";

const LoginContainer = React.lazy(() => import('./components/MainView/Login/LoginContainer'));
const Faq = React.lazy(() => import('./components/MainView/Faq/Faq'));

const Routes = (props) => {

    return (
        <Switch>
            <Route  path='/profile/:userId?' render={() => <ProfileContainer />}/>
            <Route  exact path='/' render={() => <Redirect to={'profile'}/>}/>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/users' render={() => <UsersContainer theme={props.theme}/>}/>
            <Route path='/login' render={withSuspense(LoginContainer)}/>
            <Route path='/faq' render={withSuspense(Faq)}/>
            <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
            {/*<Route exact path='/destinations' component={Destinations}/>
            <Route exact path='/destinations/:country' component={Country}/>
            <Route exact path='/blog' component={Blog}/>
            <Route exact path='/services' component={Services}/>
            <Route exact path='/contacts' component={Contacts}/>*/}
        </Switch>
    )
}

export default Routes;