import React from 'react'
import { Route } from 'react-router-dom'
import { Leaderboard } from '../Leaderboard/Leaderboard'

export const Main = () => {
    return (
        <React.Fragment>
            <Route path="/" exact>
                <p>Home</p>
            </Route>
            <Route path="questions/:question_id" exact>
                <p>questions/:question_id</p>
            </Route>
            <Route path="/add" exact>
                <p>add</p>
            </Route>
            <Route path="/leaderboard" exact>
                <Leaderboard />
            </Route>
        </React.Fragment>
    )
}
