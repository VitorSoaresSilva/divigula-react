import React, { Component } from 'react'
import Axios from 'axios'
import Main from './Main'
export class Ocorrencias extends Component {
    constructor(){
        super();
        this.state = {
            numPedido:"",
            numNota:"",
            numCliente:""
        }
    }
    handleInputChange = ({target}) =>{
        this.setState({[target.name]:target.value})
    }
    handleSubmit = () =>{
        const {numCliente,numNota,numPedido} = this.state;
        if(numPedido!==""){
            Axios.post(`http://192.168.0.112:3374/teste`, {numPedido,numCliente,numNota}).then(res=>console.log()).catch(err=>console.log(err))
        }
    }
    render() {
        const {numCliente,numNota,numPedido} = this.state;
        return (
            <div class="container">
                <form>
                    <div class="form-group">
                        <label>Numero do Pedido</label>
                        <input 
                            class="form-control"
                            name="numPedido"
                            value={numPedido}
                            onChange={this.handleInputChange}
                            ></input>
                    </div>
                    {/* 
                    <div class="form-group">
                        <label>Numero da Nota</label>
                        <input 
                            class="form-control"
                            name="numNota"
                            value={numNota}
                            onChange={this.handleInputChange}
                            ></input>
                    </div>
                    <div class="form-group">
                        <label>Numero do Cliente</label>
                        <input 
                            class="form-control"
                            name="numCliente"
                            value={numCliente}
                            onChange={this.handleInputChange}
                            ></input>
                    </div>
                     */}
                    <div className="field">
                            <button class="btn btn-default" onClick={e => { e.preventDefault(); this.handleSubmit()}}>Buscar</button>
                        </div>
                </form>
            </div>
        )
    }
}

export default Ocorrencias
