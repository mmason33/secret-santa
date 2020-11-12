import React, { useState, useCallback } from 'react';
import { removeUser, matchUser } from '../../firebase/firebase';
import SantaWrapper from './style';
import Snow from '../Snow/Snow';
import LogoutButton from '../LogoutButton/LogoutButton';

export default function Santa({ user, allUsers, userMatch = false }) {
	const [ matchedUser, setMatchedUser ] = useState(userMatch);
	const [ allNames ] = useState(allUsers ? allUsers.map(obj => obj.fullName) : false);
	const [ buttonText, setButtonText ] = useState(!userMatch ? 'Pull A Name' : 'Name Pulled');
	let interval;

	const saveSelection = useCallback(async (userObj) => {
		await matchUser(user.fullName, userObj);
		console.log(userObj.id);
		await removeUser(userObj.id);
	}, [user]);

	const getRandomUser = (e) => {
		e.currentTarget.setAttribute('disabled', true);
		selectionNameAnimation();
		setTimeout(() => {
			const random = allUsers[Math.floor(Math.random() * allUsers.length)];
			const node = document.querySelector('.name');
			node.textContent = random.fullName;
			clearInterval(interval);
			saveSelection(random);
			setMatchedUser(random);
			setButtonText('Name Pulled');
		}, 3000);
	};

	const selectionNameAnimation = () => {
		const node = document.querySelector('.name');
		interval = setInterval(() => {
			node.textContent = allNames[Math.floor(Math.random() * allNames.length)]
		}, 80);
	};

	return (
		<SantaWrapper>
			<LogoutButton/>
			<h1>Secret Santa</h1>
			<button onClick={getRandomUser} disabled={userMatch ? true : false}>{buttonText}</button>
			<div className="name">{matchedUser.fullName}</div>
			{
				matchedUser ?
				<div className="results">
					<div>Name: {matchedUser.fullName || ''}</div>
					<div>Address: {matchedUser.address || ''}</div>
					<div>City: {matchedUser.city || ''}</div>
					<div>{matchedUser.apt ? `Apt: ${matchedUser.apt}` : ''}</div>
					<div>State: {matchedUser.state || ''}</div>
					<div>Zip: {matchedUser.zip || ''}</div>
					<div>Group: {matchedUser.groups || ''}</div>
				</div> :
				''
			}
			<Snow/>
			<div className="santa-img">
				<img src="santa.png" alt="santa image" />
			</div>
		</SantaWrapper>
	);
}
