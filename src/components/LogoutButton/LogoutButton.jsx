import React from 'react';
import LogoutButtonWrapper from './style';
import { logOut } from '../../firebase/firebase';

export default function LogoutButton() {
	return (
		<LogoutButtonWrapper>
			<button onClick={logOut}>Logout</button>
		</LogoutButtonWrapper>
	);
}
