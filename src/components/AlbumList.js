import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'




class AlbumList extends Component { 
    state = {
        albums: [],
    }

    componentDidMount() {
        axios.get('http://localhost:3001/albums').then(resp =>{
            this.setState({
            albums: resp.data
            })
        })
 
    }


    render() {
        return (
            <Fragment>
                <h1>America The Beautiful</h1>

                <div className="AlbumList">
                    {this.state.albums.map(park => (
                        <div key={`park-${park.id}`} 
                        className="park">
                        <Link to={"/Albums/"+park.id}>
                            <img src={park.pic}/> 
                            <p>{park.name}, {park.state}</p>
                        </Link>
                        </div>
                    ))}
                </div>
            </Fragment>
        )
    }
}
    
    
    



export default AlbumList