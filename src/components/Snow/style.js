import styled from 'styled-components';

const SnowWrapper = styled.div`
	z-index: 0;

	canvas {
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		pointer-events: none;
	}
`;

export default SnowWrapper;
