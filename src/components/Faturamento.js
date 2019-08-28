import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Faturamento extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <ul class="nav navbar-nav">
                        <li><Link to='/faturamento'>Menu</Link></li>
                        <li><Link to='/faturamento'>Menu</Link></li>
                        <li><Link to='/ocorrencias'>Ocorrencias</Link></li>
                        <li><Link to='/faturamento'>Menu</Link></li>
                        <li><Link to='/faturamento'>Menu</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Faturamento
