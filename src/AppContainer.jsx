import React from 'react';
import App from './App';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router';
import {initializeApp} from './dataredux/app-reducer';
import store from './dataredux/redux-store';
import {BrowserRouter} from 'react-router-dom';

class AppContainer extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        return (
            <>
                <App {...this.props}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    themes: state.appPage.themes,
    initialized: state.appPage.initialized
})

const AppContainerWithCompose = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(AppContainer)

const GlobalApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainerWithCompose />
        </Provider>
    </BrowserRouter>
}

export default GlobalApp;