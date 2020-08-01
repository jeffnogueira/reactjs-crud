import React, { useState } from "react";
import Logo from "../../../../assets/images/logo.svg";
import { Form, Container } from "./styles";
import api from "../../../shared/services/api.service";
import { login } from "../../../shared/services/auth.service";
import { useHistory } from "react-router-dom";
import { errorSwalService } from './../../../shared/services/swal.service';

const Login = () => {

	const [ username, setUsername ] = useState('test');
	const [ password, setPassword ] = useState('test');

	const history = useHistory();
	
	const handleSignIn = e => {
		e.preventDefault();
		if (!username || !password) {
			errorSwalService('Ops', 'Preencha e-mail e senha para continuar!');
		} else {
			api.post("/auth", { username, password }).then(res => {
				login(res.data.access_token);
				history.push("/auth");
			}).catch(error => {
				errorSwalService('Ops', error.data.description);
			});
		}
	};

	return (
		<Container>
			<Form onSubmit={handleSignIn}>
				<h2>Área de Login</h2>
				<img src={Logo} alt="Logo" />
				<input type="text" placeholder="Usuário" value={username} onChange={e => setUsername(e.target.value)} />
				<input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
				<button type="submit">Login</button>
			</Form>
		</Container>
	);
}
    
export default Login;