const admin = require('firebase-admin');
const fs = require('fs');
const collections = require('./collections.js');

const serviceAccount = require('./service-account.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const setData = (collection, file) => {
	const json = fs.readFileSync(file, 'utf-8');
	const { data } = JSON.parse(json);

	data.forEach(async item => {
		console.log(item);
		const docRef = db.collection(collections.users);
		await docRef.add(item);
	})
};


setData(null, './data.json');

