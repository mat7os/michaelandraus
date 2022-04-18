import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
	return (
		<div className="app__social">
			<div className="cursor-pointer">
				<BsTwitter />
			</div>
			<div className="cursor-pointer">
				<a href="https://www.instagram.com/michael_andraus/?hl=es">
					<BsInstagram />
				</a>
			</div>
			<div className="cursor-pointer">
				<a href="https://www.facebook.com/michael.andraus">
					<FaFacebookF />
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
