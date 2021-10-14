import React from 'react';
import MainNavigation from './MainNavigation';
const Layout = (props) => {
	return (
		<>
			<MainNavigation />
			<main className="container pt-5">{props.children}</main>
		</>
	);
};

export default Layout;
