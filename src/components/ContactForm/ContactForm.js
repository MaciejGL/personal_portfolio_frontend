import React, { useState } from 'react';
import { useFormik } from 'formik';

// Components
import { TextField, Button, Typography } from '@material-ui/core';

// Styles
import classes from './ContactForm.module.scss';
import { useStyles_ContactForm } from '../../styles/mui_styles';

// utils
import { submitFormHandler, validationSchema } from './formUtils';

const ContactForm = () => {
	const classes_Mui = useStyles_ContactForm();
	const [isLoading, setIsLoading] = useState(false);
	const [emailReposne, setEmailResponse] = useState('');

	const formik = useFormik({
		initialValues: {
			email: '',
			message: '',
		},
		validationSchema: validationSchema,
		onSubmit: async (values, { resetForm }) => submitFormHandler(values, resetForm, setIsLoading, setEmailResponse),
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
					{isLoading ? 'Sending...' : 'Submit'}
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
