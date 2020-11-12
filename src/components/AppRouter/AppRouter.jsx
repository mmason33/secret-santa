import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Consent from '../Consent/Consent';
import Santa from '../Santa/Santa';

export default function AppRouter({ allUsers, user, userMatch = false }) {
	return (
		<>
			<Switch>
				<Route path="/consent">
					<Consent user={user} userMatch={userMatch} />
				</Route>
				<Route path="/secret-santa">
					<Santa user={user} allUsers={allUsers} userMatch={userMatch} />
				</Route>
			</Switch>
			{
				user.consent ?
					 <Redirect to="/secret-santa"/> :
					 <Redirect to="/consent"/>
			}
		</>
	);
}

