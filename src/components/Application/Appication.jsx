import React, { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';
import Login from '../Login/Login';
import AuthedView from '../AuthedView/AuthedView';

export default function Application() {
	const user = useContext(UserContext);

	return (
		<>
			{
				user ?
					<AuthedView user={user} />:
					<Login/>
			}
		</>
	)
}
