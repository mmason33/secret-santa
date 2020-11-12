import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { getUsers, checkIfUserIsMatched } from '../../firebase/firebase';
import AppRouter from '../AppRouter/AppRouter';
import { BrowserRouter as Router} from 'react-router-dom';

export default function AuthedView({ user }) {
	const [ load, setLoad ] = useState(true);
	const [ allUsers, setAllUsers ] = useState(false);
	const [ currentUserLastName ] = useState(user.displayName.substring(user.displayName.lastIndexOf(' ') + 1, user.displayName.length));
	const [ userObj, setUserObj ] = useState(false);
	const [ matchedUser, setMatchedUser ] = useState(false);

	useEffect(() => {
		if (!load) return () => false;

		(async () => {
			if (allUsers) return false;
			const matchCheck = await checkIfUserIsMatched(currentUserLastName);
			setMatchedUser(matchCheck);
			if (matchCheck) return false;
			const users = await getUsers();
			console.log(users);
			const removeCurrentUser = users.filter(obj => !obj.fullName.includes(currentUserLastName));
			const userData = users.filter(obj => obj.fullName.includes(currentUserLastName));
			console.log(userData);
			setUserObj(userData[0]);
			setAllUsers(removeCurrentUser);
		})();

		setTimeout(() => {
			setLoad(false);
		}, 7000);
	}, [load, currentUserLastName, userObj, allUsers]);

	return (
		<Router>
			{
				load ?
					<Loader/>
					:
					<AppRouter allUsers={allUsers} user={userObj} userMatch={matchedUser}/>
			}
		</Router>
	);
}
