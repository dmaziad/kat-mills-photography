import WeddingPhoto from '../images/wedding-outdoors.jpg';
import styled from 'styled-components';

export const BodyStyle = styled.div`
	height: 100%;
	min-height: 815px;
`;
export const PageStyles = styled.main`
	color: #232129;
	font-family: -apple-system, Roboto, sans-serif, serif;
`;
export const headingStyles = styled.div`
	margin-top: 0;
	margin-bottom: 64;
	max-width: 320;
`;
export const headingAccentStyles = styled.div`
	color: #663399;
`;
export const paragraphStyles = styled.div`
	margin-bottom: 48;
`;
export const codeStyles = styled.code`
	color: #8A6534;
	padding: 4;
	background-volor: #FFF4DB;
	font-size: 1.25rem;
	border-radius: 4;
`;
export const listStyles = styled.div`
	margin-bottom: 96;
	padding-left: 0;
`;
export const listItemStyles = styled.div`
	font-weight: 300;
	font-size: 24px;
	max-width: 560px;
`;
export const linkStyle = styled.div`
	color: #8954A8;
	font-weight: bold;
	font-size: 16px;
	vertical-align: 5%;
`;
export const docLinkStyle = styled(linkStyle)`
	list-style-type: none;
	margin-bottom: 24;
`;
export const descriptionStyle = styled.div`
	color: #232129;
	font-size: 14px;
`;
export const LeftColumnStyle = styled.div`
	float: left;
	width: 60%;
	height: 90vh;
	background-color: rgba(255, 255, 255, 0.9);
	transform: skew(20deg);
	transform-origin: bottom;
	min-height: 800px;
	max-height: 1050px;
	@media (max-width: 915px) {
		width: 100%;
		transform: skew(0deg);
	}
`;
	
export const RightColumnStyle = styled.div`
	width: 10%;
	height: 100%;
	float: right;
	@media (max-width: 915px) {
		display:none;	
	}
`;

// TODO: Rotating background image
export const ColumnStyles = styled.div`
	float: left;
	margin-left: -10px;
	overflow: hidden;
	width: 100vw;
	max-width: 1500px;
	max-height: 80vh;
	background-image: url(${WeddingPhoto});
	background-repeat: no-repeat;
	background-size: 100%;
	min-height: 800px;
`;

export const ColumnContentStyle = styled.div`
	transform: skew(-20deg);
	height: 100%;
	width: 100%;
	min-height: 800px;
	@media (max-width: 915px) {
		transform: skew(0deg);	
	}
`;
export const ImageWrapperStyle = styled.div`
	display: block;
	padding-top: 37.5%;
	padding-left: 20%;
	margin-left: auto;
	margin-right: auto;
	width: 50%;
`;
export const NextButton = styled.div`
	position: absolute;
	top: 40%;
	right: 10px;
	font-family: Calibri, sans-serif;
	font-size: 24px;
	width: 48px;
	height: 36px;
	border: 0;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.75);
	text-align: center;
	padding: 13px 5px 10px 5px;
	@media (min-width: 1500px) {
		position: absolute;
		left: 1425px;
	}
	@media (max-width: 915px) {
		display: none;	
	}
`;
