import React from 'react'

export default class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gist: null
        }
    }

    getGist(url) {
        fetch(url)
            .then(res => res.json())
            .then(gist => this.setState({gist}));
    }

    render() {
        this.getGist(this.props.url)

        return (
            <h1>{JSON.stringfy(this.state.gist)}</h1>
        )
    }
}
