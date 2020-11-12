import styled from 'styled-components';

const LoaderWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	background-color: #CC231E;

	.text-wrap {
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(-50%, -60%);
		width: 300px;
		height: 150px;
		text-align: center;
	}

	.text-item {
		font-family: 'Fredoka One', cursive;
		color: white;
		font-size: 18px;
		line-height: 2;
		transition: ease all .3s;
		animation: text .5s linear 1 forwards;
	}

	.christmas {
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -30%);
		width: 200px;
		height: 200px;
		position: relative;
		border-radius: 50%;
		background-color: #0C1E42;
		background-image: radial-gradient(circle at 50% 18%, yellow 3%, transparent 3.5%), linear-gradient(60deg, #7dae41 8%, transparent 8.5%), linear-gradient(-60deg, #79a83f 8%, transparent 8.5%), linear-gradient(60deg, #75a33d 10%, transparent 10.5%), linear-gradient(-60deg, #719d3b 10%, transparent 10.5%), linear-gradient(60deg, #6d9839 12%, transparent 12.5%), linear-gradient(-60deg, #699237 12%, transparent 12.5%), linear-gradient(80deg, #855726 5%, transparent 5.5%), linear-gradient(-80deg, #7f5324 5%, transparent 5.5%);
		background-position: 0 0, 100px 80px, 100px 80px, 100px 111.1111111111px, 100px 111.1111111111px, 100px 142.8571428571px, 100px 142.8571428571px, 100px 160px, 100px 160px;
		animation: pulse 1s linear infinite forwards;
	}

	.christmas:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		transform: rotate(-15deg);
		background-image: radial-gradient(circle at 30% 30%, #fff 1.5%, transparent 2.5%), radial-gradient(circle at 80% 70%, #fff 1.5%, transparent 2.5%), radial-gradient(circle at 30% 50%, #fff 1%, transparent 2%), radial-gradient(circle at 70% 85%, #fff 1%, transparent 2%);
		background-size: 100% 100%, 100% 100%, 50% 100%, 50% 50%;
		background-position: 0 0, 0 0, 0 0, 0 0;
		animation: snow 6s linear infinite forwards;
	}

	@keyframes snow {
		100% {
			background-position: 0px 200px, 0 200px, 0px 200px, 0px 200px;
		}
	}

	@keyframes text {
		0% {
			transform: scale(0);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
`;

export default LoaderWrapper
