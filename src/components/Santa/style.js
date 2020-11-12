import styled from 'styled-components';

const SantaWrapper = styled.div`
	background-color: #CC231E;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	text-align: center;

	h1 {
		font-family: 'Mountains of Christmas', cursive;
		color: white;
		font-size: 120px;
		margin: 50px 0;
	}

	button {
		font-family: 'Fredoka One', cursive;
		font-size: 30px;
		padding: 10px 20px;
		background-color: transparent;
		border: 1px solid white;
		border-radius: 5px;
		color: white;
		transition: ease all .3s;

		&:hover {
			background-color: white;
			color: #CC231E;
			box-shadow: 2px 2px 5px black;
		}

		&:disabled {
			pointer-events: none;
			opacity: 50%;
		}
	}

	.name {
		color: white;
		font-size: 60px;
		font-family: 'Fredoka One', cursive;
		margin: 40px 0;
	}

	.results {
		max-width: 500px;
		margin: 0 auto;
		text-align: left;

		div {
			color: white;
			font-size: 20px;
			font-family: 'Fredoka One', cursive;
			line-height: 2;
		}
	}

	.santa-img {
		position: absolute;
		bottom: 0;
		right: 0;
		overflow: hidden;
		max-width: 700px;

		img {
			max-width: 100%;
		}
	}
`;

export default SantaWrapper;
