import axios from 'axios'

export function getAlbumList() {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/albums').then(resp => { const albums = resp.data.map((album) => {
            return{
            albums: album
            }})
        })

        resolve(albums)
    })
}