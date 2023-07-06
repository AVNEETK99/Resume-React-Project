import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/person1.jpg';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='Avneet Kaur' />
					<Link className='btn-floating halfway-fab waves-effect waves-light black'>
						<i className='material-icons activator'>more_vert</i>
					</Link>
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						<strong>Avneet Kaur Saini</strong>
					</span>
					<p>Mentor | Python | Databases | MySQL | Data Structures | Front-End Development</p>
				</div>
				<div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						<strong>Web Links</strong>
						<i className='material-icons right'>close</i>
					</span>
					<p className='flex-container'>
					<a href='https://github.com/AVNEETK99'>
                        <i className='fab fa-github grey-text text-darken-4 social_style'></i>
                    </a>
					<a href='https://www.linkedin.com/in/avneet-kaur-87a049190/'>
                        <i className='fab fa-linkedin-in grey-text text-darken-4 social_style'></i>
                    </a>
					<a href='https://leetcode.com/user8866Ie/'>
					    <i className='fas fa-code grey-text text-darken-4 social_style'></i>
                    </a>
					<a href='https://www.hackerrank.com/avneetkaur12937'>
					    <i className='fas fa-code grey-text text-darken-4 social_style'></i>
                    </a>
					</p>
				</div>
			</div>
		</div>
	);
}
