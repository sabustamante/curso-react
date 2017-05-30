import React from 'react'
import { BrowserRouter as Router, Route }  from 'react-router-dom'

import Content from './Content'

const STYLE = {
    width: 580,
    float: 'left'
}

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null
        }
    }

    render() {
        const gists = this.props.gists;

        return (
            <div style={STYLE}>
                <h1>Detalle</h1>
                <Route path="/g/:gistId" render={({match}) => (
                    <Content url={gists.find(g => g.id === match.params.gistId).url} />
                )} />
            </div>
        )
    }
}
