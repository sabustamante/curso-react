import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch }  from 'react-router-dom'

import About from './sections/About'
import Courses from './sections/Courses'

class App extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/courses" component={Courses} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
