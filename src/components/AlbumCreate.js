import React from 'react'

const AlbumCreate = ({album,artist,handleInputChange,handleSubmit}) => (
    <div class="">
        <form>
            <div class="form-group">
                <label>Nome do Album</label>
                <input 
                    type="text" 
                    placeholder="Nome do album" 
                    name="album" 
                    value={album} 
                    onChange={handleInputChange}
                    class="form-control">
                </input>
            </div>
            <div class="form-group">
                <label>Nome do Artista</label>
                <input 
                    type="text" 
                    placeholder="Nome do Artista"  
                    name="artist" 
                    value={artist} 
                    onChange={handleInputChange}
                    class="form-control">
                </input>
            </div>
            <div className="field">
                <button class="btn btn-default" onClick={handleSubmit}>Adicionar</button>
            </div>
        </form>
    </div>
)

export default AlbumCreate
/*<h1 className="title">Adicionar Novo Album</h1>
        <div className="field">
            <div className="control">
                <input type="text" 
                    className="input" 
                    placeholder="Nome do Album" 
                    name="album" 
                    value={album} 
                    onChange={handleInputChange}>
                </input>
            </div>
        </div>
        <div className="field">
            <div className="control">
                <input type="text" 
                    className="input" 
                    placeholder="Nome do Artista" 
                    name="artist" 
                    value={artist} 
                    onChange={handleInputChange}>
                </input>
            </div>
        </div>
        <div className="field">
            <button className="button" onClick={handleSubmit}>Adicionar</button>
        </div>*/