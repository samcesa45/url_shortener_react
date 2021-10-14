import React from 'react';
import GithubIcon from '../SvgIcon/GithubIcon';
import classes from './MainNavigation.module.css';
const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div className={classes.brand}>
				<a href="#brand">Short.ly</a>
			</div>
			<nav className={classes.nav}>
				<ul>
					<li>
						<a href="#github" className={classes.icon}>
							<GithubIcon />
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
