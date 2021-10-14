import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import UrlForm from './components/UrlForm/UrlForm';
import View from './components/view/View';

const App = (props) => {
	const [url, setUrl] = useState('');
	const handleUrlChange = (event) => setUrl(event.target.value);

	const fetchUrlHandler = async () => {
		try {
			const link = {
				domain: 'bit.ly',
				long_url: `${url}`,
			};
			const response = await fetch(process.env.REACT_APP_API_ENDPOINT, {
				method: 'POST',
				body: JSON.stringify(link),
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
					'Content-Type': 'application/json',
				},
			});

			const data = await response.json();
			// console.log(data);
			setUrl(data.link);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Layout>
			<View />
			<UrlForm
				onAddURL={fetchUrlHandler}
				onUrlChange={handleUrlChange}
				url={url}
			/>
		</Layout>
	);
};

export default App;
