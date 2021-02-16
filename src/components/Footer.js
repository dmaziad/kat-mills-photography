import React from 'react';
import {
	FooterStyles,
	FooterListStyles,
	FooterListItemStyles,
	FooterLinkStyles
} from '../styles/footer';

const Footer = () => (
	<FooterStyles>
		<FooterListStyles>
			<FooterListItemStyles>
				<FooterLinkStyles href='mailto:kat@katmillsphotography.com'>Email</FooterLinkStyles>
			</FooterListItemStyles>
			<FooterListItemStyles>
				<FooterLinkStyles href='https://www.instagram.com/katmillsm'>Instagram</FooterLinkStyles>
			</FooterListItemStyles>
			<FooterListItemStyles>
				<FooterLinkStyles href='https://www.twitter.com/katmillsm'>Twitter?</FooterLinkStyles>
			</FooterListItemStyles>
		</FooterListStyles>
	</FooterStyles>
);

export default Footer;
