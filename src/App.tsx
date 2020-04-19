import { Container } from '@material-ui/core';
import React, { Fragment } from 'react';
import { Header } from './components/Header/Header';
import { UserLogin } from './components/UserLogin/UserLogin';
import './styles/css/index.css';
import { User } from './utils/_DATA';

export type AppProps = {
    user?: User;
}

export const App: React.FC<AppProps> = ({ user }) => {
    return (
        <Fragment>
            <Header />
            <Container maxWidth="md">
                {user
                    ? <p>app</p>
                    : <UserLogin />
                }
            </Container>
        </Fragment>
    )
}
