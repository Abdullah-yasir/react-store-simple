import React from 'react';
import { useNavigate } from 'react-router-dom';

import { runJQueryCode } from './script';

export default function Login(props) {
	const navigate = useNavigate();

	React.useEffect(() => {
		runJQueryCode();
	}, []);

	const login = () => {
		navigate('/listing');
	};

	return (
		<>
			<div className="login">
				<div className="login_title">
					<span>Login to your account</span>
				</div>
				<div className="login_fields">
					<div className="login_fields__user">
						<div className="icon">
							<img
								alt="some img"
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/user_icon_copy.png"
							/>
						</div>
						<input placeholder="Username" type="text" />

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
						<input placeholder="Password" type="password" />
						<div className="validation">
							<img
								alt="some img"
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png"
							/>
						</div>
					</div>
					<div className="login_fields__submit">
						<input type="submit" value="Log In" />
						<div className="forgot">
							<a href="/register">Create Account?</a>
						</div>
					</div>
				</div>
				<div className="success">
					<h2>Authentication Success</h2>
					<p>Welcome</p>

					<button onClick={login}>Go To Site</button>
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
				<p>Authenticating...</p>
			</div>
		</>
	);
}
