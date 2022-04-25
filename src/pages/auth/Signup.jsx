import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../config/api';

import { runJQueryCode } from './script';

export default function Signup() {
	const navigate = useNavigate();

	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [confirmPassword, setConfirmPassword] = React.useState('');

	React.useEffect(() => {
		runJQueryCode();
	}, []);

	const login = () => {
		navigate('/login');
	};

	const register = () => {
		if (email !== '' && password !== '' && confirmPassword !== '') {
			if (password === confirmPassword) {
				axios
					.post(api.register, { username: email, password })
					.catch(err => {
						alert(err.message);
						console.log(err);
					});
			} else {
				alert('Passwords do not match');
			}
		} else {
			alert('Please fill in all fields');
		}
	};

	return (
		<>
			<div
				className="login"
				style={{
					height: 400,
				}}>
				<div className="login_title">
					<span>Create account</span>
				</div>
				<div className="login_fields">
					<div className="login_fields__user">
						<div className="icon">
							<img
								alt="some img"
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/user_icon_copy.png"
							/>
						</div>
						<input
							placeholder="Email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							type="text"
						/>

						<div className="validation">
							<img
								alt="some img"
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png"
							/>
						</div>
					</div>
					<div className="login_fields__password">
						<div className="icon">
							<img
								alt="some img"
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/lock_icon_copy.png"
							/>
						</div>
						<input
							placeholder="Password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							type="password"
						/>
						<div className="validation">
							<img
								alt="some img"
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png"
							/>
						</div>
					</div>
					<div className="login_fields__password">
						<div className="icon">
							<img
								alt="some img"
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/lock_icon_copy.png"
							/>
						</div>
						<input
							placeholder="Retype Password"
							value={confirmPassword}
							onChange={e => setConfirmPassword(e.target.value)}
							type="password"
						/>
						<div className="validation">
							<img
								alt="some img"
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png"
							/>
						</div>
					</div>
					<div className="login_fields__submit">
						{/* <input type="submit" onClick={register} value="Register" /> */}
						<button onClick={register}>Register</button>
					</div>
				</div>
				<div className="success">
					<h2>Registeration Success</h2>
					<p>Welcome</p>

					<button onClick={login}>Login</button>
				</div>
				<div className="disclaimer">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce semper laoreet placerat. Nullam semper auctor
						justo, rutrum posuere odio vulputate nec.
					</p>
				</div>
			</div>
			<div className="authent">
				<img
					alt="some img"
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/puff.svg"
				/>
				<p>Registering...</p>
			</div>
		</>
	);
}
