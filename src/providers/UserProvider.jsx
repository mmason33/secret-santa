import React, { useState, useEffect, createContext } from 'react';
import { auth } from '../firebase/firebase';
export const UserContext = createContext({ user: null });

export default ({ children }) => {
	const [user, setuser] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			console.log(user);
			setuser(user);
		});
	}, []);

	return (
		<UserContext.Provider value={user}>
			{children}
		</UserContext.Provider>
	);
};
