import React, {Fragment, Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class ImageList extends Component {
    state = {
        albums: [],
        images: [],
        parkSelected: ''
    }

    componentDidMount() {
        axios.get('http://localhost:3001/albums').then(resp =>{
            this.setState({
            albums: resp.data
            })

            const id = Number(this.props.match.params.id)

            console.log(id)

            const parkSelected = this.state.albums.find(parks => parks.id === id)

            console.log(parkSelected)

            this.setState({
                parkSelected: this.state.albums.find(parks => parks.id === id)
            })
           
        })

        axios.get('http://localhost:3001/images').then(resp =>{

            const id = Number(this.props.match.params.id)

            const imagesSelected = resp.data.filter(images => images.albumId = id)

            console.log(imagesSelected)
        
            this.setState({
            images: imagesSelected,
            })

            console.log(this.state.images)
        })

       

       

       

        
 
    }

    

    render() {
        return(  
            <Fragment>
                
                <h1>{this.state.parkSelected.name}</h1>
               
            
                <div>
                    <div className="left">
                        <ul className="parkList">
                        {this.state.albums.map(park => (
                            <li key={`park-${park.id}`}>
                                <Link to={"/Albums/"+park.id}>
                                <p>{park.name}, {park.state}</p>
                                </Link>
                            </li> 
                            ))}
                        </ul>

                    </div>
                    <div className="right">
                            {/* {this.state.images.filter(image => (
                                <div>
                                    <img src={image.albumId=this.state.parkSelected.id}></img>
                                </div>
                            ))} */}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ImageList