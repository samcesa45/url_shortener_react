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
					Short.ly is a simple url shortener app that helps you transform your
					long urls to shoter one. Which enables your site's url to be accessed
					without much hassles. Thereby increases your site reacheability and
					generate good traffic for your business. I hope you get all the
					benefits you desire while using this site.
				</p>
			</article>

			<div className={classes.action}>
				<button>Get started</button>
			</div>
		</section>
	);
};

export default View;
