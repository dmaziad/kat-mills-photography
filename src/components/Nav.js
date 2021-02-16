import React, { useEffect, useState } from 'react';
import {
	HeaderStyles,
	NavStyles,
	NavListStyles,
	NavListItemStyles,
	NavLinkStyles,
} from '../styles/nav';
import Logo from '../images/km_logo.jpg';

const Nav = () => {
	const [logoVisibility, setLogoVisibility] = useState(false);
	useEffect(() => {
		const loc = window.location.href.split('/').slice(3);
		if (loc[0]) {
			setLogoVisibility(true);
		}
	}, []);

	return (
		<HeaderStyles>
			<header className='header'>
				{logoVisibility && (
					<a href='/'>
						<img
							src={Logo}
							height='50px'
							width='67px'
							alt='Kat Mills Photography logo'
						/>
					</a>
				)}
				<NavStyles>
					<NavListStyles>
						<NavListItemStyles>
							<NavLinkStyles href='/'>home</NavLinkStyles>
						</NavListItemStyles>
						{/* <NavListItemStyles>
							<NavLinkStyles href='/gallery'>gallery</NavLinkStyles>
						</NavListItemStyles> */}
						<NavListItemStyles>
							<NavLinkStyles href='/video'>video</NavLinkStyles>
						</NavListItemStyles>
						<NavListItemStyles>
							<NavLinkStyles href='/blog'>blog</NavLinkStyles>
						</NavListItemStyles>
						<NavListItemStyles>
							<NavLinkStyles href='/about'>about</NavLinkStyles>
						</NavListItemStyles>
						<NavListItemStyles>
							<NavLinkStyles href='/contact'>contact</NavLinkStyles>
						</NavListItemStyles>
					</NavListStyles>
				</NavStyles>
			</header>
		</HeaderStyles>
	);
};

export default Nav;
