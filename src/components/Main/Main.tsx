import React from 'react'
import { Route } from 'react-router-dom'
import { Leaderboard } from '../Leaderboard/Leaderboard'
import { NewQuestion } from '../NewQuestion/NewQuestion'

export const Main = () => {
    return (
        <div className="main__wrapper">
            <Route path="/" exact>
                <p>Home</p>
            </Route>
            <Route path="questions/:question_id" exact>
                <p>questions/:question_id</p>
            </Route>
            <Route path="/add" exact>
                <NewQuestion />
            </Route>
            <Route path="/leaderboard" exact>
                <Leaderboard />
            </Route>
        </div>
    )
}
