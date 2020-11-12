import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { logOut, updateUserConsent } from '../../firebase/firebase';
import ConsentWrapper from './style';
import Reindeer from '../Reindeer/Reindeer';

export default function Consent({ user, userMatch }) {
	const [ userConsent, setConsent ] = useState(null)

	const declineConsent = async (e) => {
		e.preventDefault();
		const prompt = window.confirm('Are you sure you want to be on the Naughty List?');
		if (prompt) {
			user.consent = false;
			await updateUserConsent(user);
			logOut();
		}
	}

	const acceptConsent = async (e) => {
		e.preventDefault();
		user.consent = true;
		await updateUserConsent(user);
		setConsent(true);
	}

	return (
		<ConsentWrapper>
			{
				user.consent || userConsent || userMatch ?
					<Redirect to="/secret-santa" /> :
					<>
						<Reindeer/>
						<h3>Do you want to participate in Envoy's Secret Santa?</h3>
						{/* <button onClick={acceptConsent}>Yes</button>
						<button onClick={declineConsent}>No</button> */}
						<a href="#" className="button tick" onClick={acceptConsent}></a>
						<a href="#" className="button cross" onClick={declineConsent}></a>
					</>
			}
		</ConsentWrapper>
	)
};
