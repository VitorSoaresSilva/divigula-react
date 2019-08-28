import React, { Component } from 'react'
import Axios from 'axios';
import Ocorrencias from './Ocorrencias'

export class LoginCreate extends Component {
    constructor(){
        super();
        this.state = {
            name:"",
            email:"",
            password:"",
            passwordConfirmacao:""
        }
    }
    handleInputChange = ({target}) =>{
        this.setState({[target.name]:target.value})
    }
    handleSubmit = () =>{
        const {name,email,password,passwordConfirmacao} = this.state;
        if(password !== passwordConfirmacao || password ===""){
            this.setState({password:"",passwordConfirmacao:""})
            alert("Passwords inválidos")
            return;
        }
        Axios.post("http://192.168.0.112:3374/teste",{name,email,password}).then(res =>{
            this.setState({name:"",email:"",password:"",passwordConfirmacao:""});
            return <Ocorrencias/>
            })
    }
    render() {
        const {name,email,password,passwordConfirmacao} = this.state;
        return (
            <div>
                    <div class="container">
                    <form>
                        <div class="form-group">
                            <label>Nome completo</label>
                            <input 
                                type="text" 
                                placeholder="Nome" 
                                value={name}
                                name="name"
                                onChange={this.handleInputChange}
                                class="form-control"></input>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input 
                                type="text" 
                                placeholder="Email"
                                value={email}
                                name="email"
                                onChange={this.handleInputChange}
                                class="form-control"></input>
                        </div>
                        <div class="form-group">
                            <label>Senha</label>
                            <input 
                                type="password" 
                                placeholder="Senha"
                                value={password}
                                name="password"
                                onChange={this.handleInputChange}
                                class="form-control"></input>
                        </div>
                        <div class="form-group">
                            <label>Confirme sua senha</label>
                            <input 
                                type="password" 
                                placeholder="Senha"
                                value={passwordConfirmacao}
                                name="passwordConfirmacao"
                                onChange={this.handleInputChange}
                                class="form-control"></input>
                        </div>
                        <div className="field">
                            <button class="btn btn-default" onClick={e => { e.preventDefault(); this.handleSubmit()}}>Criar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginCreate;