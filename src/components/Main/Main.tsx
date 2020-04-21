import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Leaderboard } from '../Leaderboard/Leaderboard'
import { NewQuestion } from '../NewQuestion/NewQuestion'
import { QuestionPoll } from '../QuestionPoll/QuestionPoll'

export const Main = () => {
    return (
        <div className="main__wrapper">
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/questions/:id" exact component={QuestionPoll} />
            <Route path="/add" exact>
                <NewQuestion />
            </Route>
            <Route path="/leaderboard" exact>
                <Leaderboard />
            </Route>
        </div>
    )
}
