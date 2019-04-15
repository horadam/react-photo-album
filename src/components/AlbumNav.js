import React from 'react'
import { Link } from 'react-router-dom'

const AlbumNav = (props) => (

    <nav>
        <ul>
            {props.albums.map(album => (
                <li>
                    <Link to={`/Albums/${album.id}`}>{album.name}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
)

export default AlbumNav