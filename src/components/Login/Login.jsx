import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase';
import LoginWrapper from './style';
import { ReactComponent as Gift } from '../../assets/Gift_Flat_Icon_Vector.svg';
import Snow from '../Snow/Snow';

export default function Login() {
	return (
		<LoginWrapper>
			<div className="content-wrap">
				<h1>Envoy Secret Santa</h1>
				<button onClick={signInWithGoogle}>Login</button>
			</div>
			<div className="svg-wrap">
				<Gift />
			</div>
			<Snow/>
		</LoginWrapper>
	)
}
