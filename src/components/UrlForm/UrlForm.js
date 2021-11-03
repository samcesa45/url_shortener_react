import React, { useRef, useState } from 'react';
import Card from '../Ui/Card';
import CopyToClipBoard from '../SvgIcon/CopyToClipboard';
import classes from './UrlForm.module.css';
const isCharLength = (value) =>
	value !== 0 &&
	/^((ftp|http|https):\/\/)?(www\.)?([A-Za-zÐ-Ð¯Ð°-Ñ0-9]{1}[A-Za-zÐ-Ð¯Ð°-Ñ0-9-]*\.?)*\.{1}[A-Za-zÐ-Ð¯Ð°-Ñ0-9-]{2,8}(\/([\w#!:.?+=&%@!\-/])*)?/.test(
		value
	);

const UrlForm = (props) => {
	const { url } = props;
	const inputRef = useRef();
	const [isTouched, setIsTouched] = useState(false);
	const [status, setStatus] = useState('');
	const isValid = isCharLength(url);
	const hasError = isTouched && !isValid;

	const blurChangeHandler = (event) => setIsTouched(true);
	const copyToClipBoard = () => {
		if (url.trim().length === 0) {
			return;
		}
		inputRef.current.select();

		navigator.clipboard
			.writeText(url)
			.then(() => {
				setStatus('copied');
				console.log('successful');
			})
			.catch((err) => {
				console.log('error reading text');
			});
	};

	let formIsValid = false;

	if (isValid) {
		formIsValid = true;
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		if (!formIsValid) {
			return;
		}

		props.onAddURL();
	};

	const controlInputClasses = `${classes.control} ${
		hasError ? classes.invalid : ''
	}`;

	return (
		<Card>
			<form className={classes.form} onSubmit={handleSubmit}>
				<h3>Write Your Url Here</h3>
				<div className={controlInputClasses}>
					<input
						type="text"
						id="url"
						placeholder="https://example.com"
						onChange={props.onUrlChange}
						value={url}
						ref={inputRef}
						onBlur={blurChangeHandler}
					/>
					<label htmlFor="url" onClick={copyToClipBoard}>
						{status ? 'copied' : <CopyToClipBoard />}
					</label>
					{hasError && (
						<p className={classes.error}>
							Please enter a valid url (https://eg.com)
						</p>
					)}
				</div>

				<div className={classes.actions}>
					<button disabled={!isCharLength(url)}>Shorten url</button>
				</div>
			</form>
		</Card>
	);
};

export default UrlForm;
