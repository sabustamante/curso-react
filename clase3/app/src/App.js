import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom';

import List from './components/List'
import Detail from './components/Detail'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gists: null
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/gists')
            .then(res => res.json())
            .then(gists => this.setState({gists}));
    }

    render() {
        return(
            <Router>
                <div>
                    <List gists={this.state.gists} />
                    <Detail gists={this.state.gists} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
