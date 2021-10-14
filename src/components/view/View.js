import React from 'react';
import img from '../../sass/assets/img/Brainstorming session _Isometric.png';
import classes from './View.module.css';
const View = () => {
	return (
		<section className={classes.view}>
			<div className={classes.viewControl}>
				<h1>Hello, Welcome to short.ly</h1>
				<img src={img} alt="brain storm img" />
			</div>
			<article className={classes.article}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus
					animi soluta velit amet ratione. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Quo ducimus animi soluta velit amet
					ratione.
				</p>
			</article>

			<div className={classes.action}>
				<button>Get started</button>
			</div>
		</section>
	);
};

export default View;
