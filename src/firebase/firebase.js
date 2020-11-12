import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
	apiKey: "AIzaSyA-7JRQOKV0bwmriPew0QPK9jyzHp5qPnI",
	authDomain: "super-secret-96c9c.firebaseapp.com",
	databaseURL: "https://super-secret-96c9c.firebaseio.com",
	projectId: "super-secret-96c9c",
	storageBucket: "super-secret-96c9c.appspot.com",
	messagingSenderId: "1013930699911",
	appId: "1:1013930699911:web:d670e17df312f938a39c22"
});


export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
	auth.signInWithPopup(googleProvider).then((res) => {
		console.log(res.user)
	}).catch((error) => {
		console.log(error.message)
	})
}

export const logOut = async () => {
	await auth.signOut().catch((error) => {
		console.log(error.message)
	});
}

export const db = firebase.firestore();

export const getUsers = async () => {
	const ref = db.collection('dev_users');
	const snapshot = await ref.get();
	const results = [];
	snapshot.forEach(doc => {
		const item = doc.data();
		item.id = doc.id;
		results.push(item);
	});

	return results;
}

export const updateUserConsent = async (user) => {
	const ref = db.collection('dev_users').doc(user.id);
	await ref.set(user);
}

export const removeUser = async (id) => {
	const ref = db.collection('dev_users').doc(id);
	await ref.delete();
}

export const matchUser = async (name, matchedUser) => {
	const ref = db.collection('dev_matched_users').doc(name.replace(/ /g, '-'));
	await ref.set(matchedUser);
}

export const checkIfUserIsMatched = async (lastName) => {
	const ref = db.collection('dev_matched_users');
	const snapshot = await ref.get();
	let userIsMatched = false;
	snapshot.forEach(doc => {
	  if (doc.id.includes(lastName)) {
		  userIsMatched = doc.data();
	  }
	});

	return userIsMatched;
}
