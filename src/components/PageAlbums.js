import React, { Component } from 'react'
import axios from 'axios';
import Albums from './Albums';
import AlbumCreate from './AlbumCreate'
export default class PageAlbums extends Component {
    constructor(){
        super();
        this.state = {
          albums:[{"artist":"Testes estão sendo realizados atualmente"}],
          album:"",
          artist:""
        }
      }
      componentDidMount(){
        axios.get("http://adonisapi.ddns.net:3374/albums").then(res => this.setState({albums:res.data})).catch(err=>console.log(err));
      }
      handleInputChange = ({target}) =>{
          this.setState({[target.name]:target.value})
      }
      handleSubmit = () =>{
        const {album,artist} = this.state;
        if(album === '' || artist === '') return;
        axios
        .post("http://adonisapi.ddns.net:3374/albums", {album,artist})
        .then(res =>this.setState(
              prev => ({
                albums:[res.data,...prev.albums],
                artist:"",
                album:""
        }))
        )
        .catch(err => console.log(err))
      }
      onDelete = (id) =>{
        if(!window.confirm("Deseja realmente excluir?")) return;
        axios.delete(`http://adonisapi.ddns.net:3374/albums/${id}`).then(res => this.setState({
          albums: this.state.albums.filter(album => album.id !== id)
        }))
      }
      render(){
        const {albums,album,artist} = this.state;
        return (
          <div class="container">
            <div>
              <div className="App">
                <AlbumCreate 
                album={album}  
                artist={artist} 
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
                />
                <div className="columns">
                  <Albums 
                  albums = {albums} 
                  onDelete={this.onDelete} />
                </div>
              </div>
            </div>
          </div>
        )
      }
}
