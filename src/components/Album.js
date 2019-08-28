import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import AddSong from './AddSong';
class Album extends Component {
    constructor(){
        super();
        this.state={
            album:[],
            "image":"",
            "previewImage":"",
            song:""
        }
    }
    componentDidMount(){
        const album = this.props.match.params.id;
        axios.get(`http://adonisapi.ddns.net:3374/albums/${album}`).then(res=>this.setState({album:res.data})).catch(err=>console.log(err));
    }
    onDeleteSong = (id) =>{
        if(!window.confirm("Tem certeza que deseja apagar esta musica?"))return;
        axios.delete(`http://adonisapi.ddns.net:3374/songs/${id}`)
        .then(this.setState(prev=>({
            album:{
                ...prev.album,
                songs:[...prev.album.songs.filter(song=>song.id!==id)]
            }
        }))).catch(err=>console.log(err))
    }
    onCreateSong = () =>{
        const {song,album} = this.state
        if(song ==="")return
        axios.post(`http://adonisapi.ddns.net:3374/albums/${album.id}/song/add`,{song}).then(res => this.setState(prev=>({
            album:{
                ...prev.album,
                songs:[...prev.album.songs,res.data]
            },
            song:""
        }))).catch(err=>console.log(err))
    }
    handleInputChange = ({target}) =>{
        this.setState({[target.name]:target.value})
    }
    render() {
        const{album,song} = this.state;
        return (
            <div>
                <div class="content">
                    
                    <h1 className="title">Detalhes do componente<small><Link to="/albums">Voltar</Link></small></h1>
                    <div className="columns">
                        <div className="column">
                            <img src="" alt="" className="image"/><br/>
                            <div className="field is-grouped">
                                <div className="file control">
                                    <label className="file-label">
                                        <input type="file" className="file-input" name="image"/>
                                        <span className="file-cta">
                                            <span className="file-icon">
                                                <i className="fas fa-upload"></i>
                                            </span>
                                            <div className="file-label">Escolher imagem</div>
                                        </span>
                                    </label>
                                </div>
                                <button className="button is-info control">Atualizar</button>
                            </div>
                        </div>
                        <div className="column">Musicas
                            <AddSong song={song} handleInputChange={this.handleInputChange} onCreateSong={this.onCreateSong}/>
                            {album.songs ? album.songs.map((song,idx)=>
                            <p key={song.id}>
                            {idx + 1} - {song.name}<span className="icon has-text-danger" onClick={()=>this.onDeleteSong(song.id)}><i className="fas fa-trash-alt" ></i></span>
                            </p>):null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Album
