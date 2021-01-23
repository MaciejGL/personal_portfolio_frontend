import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

// Components
import { TextField, Button, Typography } from '@material-ui/core';

// Styles
import classes from './ContactForm.module.scss';
import { useStyles_ContactForm } from '../../styles/mui_styles';

const validationSchema = yup.object({
	email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
	message: yup.string('Enter your Message').min(8, 'Message should be of minimum 8 characters length').required('Message is required'),
});

const ContactForm = () => {
	const classes_Mui = useStyles_ContactForm();
	const [isLoading, setIsLoading] = useState(false);
	const [emailReposne, setEmailResponse] = useState('');
	const formatEmail = (values) => ({
		from: values.email,
		to: process.env.EMAIL,
		replyTo: values.email,
		subject: 'Portfolio - Contact Form',
		text: values.message,
	});
	const formik = useFormik({
		initialValues: {
			email: '',
			message: '',
		},
		validationSchema: validationSchema,
		onSubmit: async (values, { resetForm }) => {
			setIsLoading(true);
			const emailData = formatEmail(values);
			try {
				const { status } = await axios.post('/api/email', emailData);
				status === 200 && setEmailResponse({ success: true, text: 'Email has been sent. I will reply as soon as possible.' });

				setIsLoading(false);
				resetForm({});
			} catch (error) {
				setEmailResponse({ success: false, text: 'Oops something went wrong. Please try again' });
				setIsLoading(false);
			}
		},
	});

	return (
		<div className={classes.formWrapper}>
			<form onSubmit={formik.handleSubmit} className={classes.form}>
				<TextField
					className={classes_Mui.input}
					fullWidth
					id="email"
					name="email"
					label="Email"
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<TextField
					className={classes_Mui.input}
					fullWidth
					variant="outlined"
					multiline
					rows={5}
					rowsMax={7}
					id="message"
					name="message"
					label="Message"
					value={formik.values.message}
					onChange={formik.handleChange}
					error={formik.touched.message && Boolean(formik.errors.message)}
					helperText={formik.touched.message && formik.errors.message}
				/>
				<Button color="primary" disableElevation variant="contained" fullWidth type="submit">
					{isLoading ? 'Sending' : 'Submit'}
				</Button>

				{emailReposne.success ? (
					<Typography variant="body1" color="inherit">
						{emailReposne.text}
					</Typography>
				) : (
					<Typography variant="body1" color="error">
						{emailReposne.text}
					</Typography>
				)}
			</form>
		</div>
	);
};

export default ContactForm;
