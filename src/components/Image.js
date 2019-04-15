import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Image extends Component {
    state = {
        image: '',
        albumId: 0
    }

    componentDidMount() {
        const id = Number(this.props.match.params.id)

        axios.get(`http://localhost:3001/images/${id}`).then( (resp) =>
            this.setState({
                image: resp.data.url,
                albumId: resp.data.albumId
            })
        )
    }

    render() {
        return (
            <div>
                <Link to={'/Albums/'+this.state.albumId}>&lt; Back to Album</Link>
                <img src={this.state.image}></img>
            </div>
        )
    }
}

export default Image