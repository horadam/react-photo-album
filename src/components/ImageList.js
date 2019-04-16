import React, {Fragment, Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AlbumNav from './AlbumNav'

class ImageList extends Component {
    state = {
        albumSelected: [],
        images: [],
        albums: []
    }

    getAlbum(id) {
        axios.get(`http://localhost:3001/albums/${id}?_embed=images`).then(resp =>{
            this.setState({
            albumSelected: resp.data.name,
            images: resp.data.images,
            })
           
        })
    }


    componentWillReceiveProps(newprops) {
        if (newprops.match.params.id !== this.props.match.params.id)
        {
        const id = Number(newprops.match.params.id)
        this.getAlbum(id)
        }
    }

    componentDidMount() {
        const id = Number(this.props.match.params.id)
        this.getAlbum(id)
        

        axios.get(`http://localhost:3001/albums`)
            .then(albums =>{
                this.setState({albums:albums.data})
            })

       

       

        
 
    }

    

    render() {
        return(  
            <Fragment>
                
                <h1>{this.state.albumSelected}</h1>
               
            
                <div id="imageListContainer">
                    <div className="parksList">
                        <AlbumNav albums={this.state.albums}/>

                    </div>
                    <div className="imgView">
                            {this.state.images.map(image => (
                                <div className="imgLinks">
                                    <Link to={"/Images/" + image.id}>
                                        <img src={image.url}></img>
                                        <p>{image.id}</p>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ImageList