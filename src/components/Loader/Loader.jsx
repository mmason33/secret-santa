import React, { useEffect, useCallback } from 'react';
import LoaderWrapper from './style';

export default function Loader() {
	let interval;
	const phrases = [
		'Reaching out to Santa...',
		'Packaging the holiday spirit...',
		'Double checking with the elves...',
		'Confirming the Grinch isn\'t here...'
	];

	const rotatePhrases = useCallback(() => {
		const node = document.querySelector('.text-wrap');
		let count = 0;
		interval = setInterval(() => {
			if (count > phrases.length) clearInterval(interval);
			const el = document.createElement('div');
			el.classList = 'text-item';
			el.textContent = phrases[count];
			node.appendChild(el);
			count += 1;
		}, 1000);
	}, [])

	useEffect(() => {
		rotatePhrases();
	}, [rotatePhrases])

	return (
		<LoaderWrapper className="loader">
			<div className="christmas"></div>
			<div className="text-wrap"></div>
		</LoaderWrapper>
	);
}
