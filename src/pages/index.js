import React, { useCallback, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Logo from '../images/km_transparent_logo.png';
import {
	BodyStyle,
	ColumnContentStyle,
	ColumnStyles,
	ImageWrapperStyle,
	PageStyles,
	LeftColumnStyle,
	RightColumnStyle,
	NextButton
} from '../styles';
import WeddingPhoto from '../images/wedding-outdoors.jpg';
import Landscape1 from '../images/landscape-1.jpg';
import Landscape2 from '../images/landscape-2.jpg';
import Landscape3 from '../images/landscape-3.jpg';
import Landscape4 from '../images/landscape-4.jpg';
import Portrait1 from '../images/portrait-1.jpg';
import Portrait2 from '../images/portrait-2.jpg';
import Portrait3 from '../images/portrait-3.jpg';

const IndexPage = () => {
	const landscapeImages = [Landscape1, Landscape2, Landscape3, Landscape4, WeddingPhoto];
	const portraitImages = [Portrait1, Portrait2, Portrait3];
	let [images, setImages] = useState(portraitImages);
	let [i, setI] = useState(0);
	let [image, setImage] = useState(images[0]);
	
	const setImageList = useCallback(() => {
		if (window.innerWidth >= 915 && images[0] !== landscapeImages[0]) {
			setImages(landscapeImages);
			setI(0);
			setImage(landscapeImages[0]);
		};
		if (window.innerWidth < 915 && images[0] !== portraitImages[0]) {
			setImages(portraitImages);
			setI(0);
			setImage(portraitImages[0]);
		}
	}, [images, landscapeImages, portraitImages, setImage, setImages])
	useEffect (() => {
		setImageList();
	}, [])
	useEffect(() => {
		window.addEventListener('resize', setImageList);
		return () => window.removeEventListener('resize', setImageList);
	}, [setImageList]);
	useEffect(() => {
		const rotator = setInterval(() => {
			if (i >= images.length - 1) {
				setI(0)
			} else {
				setI(i + 1)
			}
			setImage(images[i]);
		}, 3000)
		return () => clearInterval(rotator);
	}, [i, images, landscapeImages, setI, setImage])

	return (
		<BodyStyle>
			<Nav />
			<PageStyles>
				<title>Home Page</title>
				<ColumnStyles image={image}>
					<LeftColumnStyle>
						<ColumnContentStyle>
							<ImageWrapperStyle>
								<img alt="Kat Mills Photography logo" width='90%' src={Logo} />
							</ImageWrapperStyle>
						</ColumnContentStyle>
					</LeftColumnStyle>
					<RightColumnStyle>
					</RightColumnStyle>
					<NextButton>{'→'}</NextButton>
				</ColumnStyles>
			</PageStyles>
			<Footer />
		</BodyStyle>
	);
};

export default IndexPage;
