import React from 'react'
import { BrowserRouter as Router, Link }  from 'react-router-dom'

const STYLE = {
    width: 300,
    backgroundColor: '#ccc',
    float: 'left'
}

export default class List extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const gists = this.props.gists;

        return (
            <div style={STYLE}>
                <h1>Lista de Gits</h1>
                <ul>
                    { gists ? gists.map((x, i) => (
                        <li key={i}>
                            <Link to={`/g/${x.id}`}>
                                {x.description || '[ no hay descripción ]'}
                            </Link>
                        </li>
                    )) : (<p>Loading ...</p>)}
                </ul>
            </div>
        )
    }
}
