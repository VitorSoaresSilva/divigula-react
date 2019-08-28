import React from 'react'
import {Link} from 'react-router-dom'

const Albums = ({albums,onDelete}) =>{
    return (
        <div>
           
        </div>
    )
}

export default Albums
/*
{albums.map(album =>
            <div className="media box" key={album.id}>
                <div className="media-left">{album.id}</div>
                <div className="media-content"><p>{album.name}</p><p>Artista: {album.artist}</p></div>
                <div className="media-right">
                    <Link to={`/albums/${album.id}`} className="button">Detalhes</Link></div>
                    <button className="button" onClick={
                        ()=>onDelete(album.id)}>Excluir
                        </button>
            </div>
        )}
{albums.map(album=>)}*/