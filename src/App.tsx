import { Container } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { handleInitialData } from './actions/shared';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { UserLogin } from './components/UserLogin/UserLogin';
import './styles/css/index.css';

export type AppProps = {
    authUser: string | null;
    dispatch: Dispatch<any>;
}

export class AppInner extends Component<AppProps> {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Container maxWidth="md">
                    {this.props.authUser
                        ? <Main />
                        : <UserLogin />
                    }
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: { authUser: string; }) => ({
    authUser: state.authUser
})

export const App = connect(mapStateToProps)(AppInner);
