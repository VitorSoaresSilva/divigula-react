import React,{ Component} from 'react';
import {Link} from 'react-router-dom'
export default class Menu extends Component{
	render(){
		return(
			<div>
				<nav class="navbar navbar-inverse navbar-fixed-top">
					<div class="container">
						<ul class="nav navbar-nav">
							<li>
								<div class="btn-group">
									<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Home <span class="caret"></span>
									</button>
									<ul class="dropdown-menu">
										<li><Link to="/">Home</Link></li>
									</ul>
								</div>
							</li>
							<li>
								<div class="btn-group">
									<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Albums <span class="caret"></span>
									</button>
									<ul class="dropdown-menu">
										<li class="disabled"><a href="#">Action</a></li>
									</ul>
								</div>
							</li>
							<li>
								<div class="btn-group">
									<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Faturamento <span class="caret"></span>
									</button>
									<ul class="dropdown-menu">
										<li><Link to="/ocorrencias">Cadastro de Ocorrencias</Link></li>
									</ul>
								</div>
							</li>
							<li>
								<div class="btn-group">
									<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Comercial <span class="caret"></span>
									</button>
									<ul class="dropdown-menu">
										<li class="disabled"><a href="#">Action</a></li>
									</ul>
								</div>
							</li>
							<li>
								<div class="btn-group">
									<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Login <span class="caret"></span>
									</button>
									<ul class="dropdown-menu">
										<li><Link to="/login">Login</Link></li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			)
		}
	}