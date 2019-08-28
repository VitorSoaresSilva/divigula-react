import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
class Login extends Component {
    constructor(){
        super();
        this.state = {
            email:"",
            password:"",
            token:""
        }
    }
    handleInputChange = ({target}) =>{
        this.setState({[target.name]:target.value})
    }
    handleSubmit = () =>{
        const{email,password}= this.state;
        axios.post("http://192.168.0.112:3374/authenticate",{email,password}).then(res=>{if(res.status===200){
            this.setState({token:res.data.token,email:"",password:""});
        }})
        .catch(err=>console.log(err))
    }
    render(){
        const{email,password} = this.state;
        return(
            <div class="container">
                <form>
                    <div class="form-group">
                        <label>Email</label>
                        <input 
                            type="text" 
                            placeholder="Email" 
                            name="email"
                            value={email}
                            onChange={this.handleInputChange}
                            class="form-control">
                        </input>
                    </div>
                    <div class="form-group">
                        <label>Senha</label>
                        <input 
                            type="password" 
                            placeholder="Senha"  
                            name="password"
                            value={password}
                            onChange={this.handleInputChange}
                            class="form-control">
                        </input>
                    </div>
                    <div>
                        <button class="btn btn-default" onClick={e => { e.preventDefault(); this.handleSubmit()}}>Adicionar</button>
                    </div>
                </form>
                <label>Não tem cadastro? <Link to="/logincreate">Clique aqui</Link></label>
            </div>
        )
    }
}
export default Login