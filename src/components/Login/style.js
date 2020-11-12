import styled from 'styled-components';

const LoginWrapper = styled.div`
	background-color: #0F8A5F;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	text-align: center;

	.content-wrap {
		margin: 20px 0 0;

		@media screen and (min-width: 768px) {
			margin: 40px 0 0;
		}

		@media screen and (min-width: 997px) {
			margin: 50px 0 0;
		}

		@media screen and (min-width: 1024px) {
			margin: 70px 0 0;
		}
	}

	.svg-wrap {
		width: 100%;
		position: relative;
		top: calc(-20vw);
		pointer-events: none;
	}

	h1 {
		font-family: 'Mountains of Christmas', cursive;
		color: white;
		font-size: 60px;

		@media screen and (min-width: 1024px) {
			font-size: 100px;
		}
	}

	button {
		font-size: 20px;
		font-family: 'Fredoka One', cursive;
		padding: 10px 50px;
		border-radius: 5px;
		background-color: transparent;
		border: 1px solid white;
		color: white;
		transition: ease all .3s;
		margin: 30px 0;

		&:hover {
			background-color: #CC231E;
			box-shadow: 3px 3px 10px black;
		}
	}
`;

export default LoginWrapper;
