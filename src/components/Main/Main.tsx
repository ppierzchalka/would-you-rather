import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Leaderboard } from '../Leaderboard/Leaderboard'
import { NewQuestion } from '../NewQuestion/NewQuestion'

export const Main = () => {
    return (
        <div className="main__wrapper">
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/questions/:id" exact component={QuestionPage} />
            <Route path="/add" exact>
                <NewQuestion />
            </Route>
            <Route path="/leaderboard" exact>
                <Leaderboard />
            </Route>
        </div>
    )
}

const QuestionPage: React.FC<any> = (props) => (<p>{props.match.params.id}</p>)
