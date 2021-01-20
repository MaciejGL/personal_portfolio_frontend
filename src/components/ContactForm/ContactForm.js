import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

// Components
import { TextField, Button } from '@material-ui/core';

// Styles
import classes from './ContactForm.module.scss';
import { useStyles_ContactForm } from '../../styles/mui_styles';

const validationSchema = yup.object({
	email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
	message: yup.string('Enter your Message').min(8, 'Message should be of minimum 8 characters length').required('Message is required'),
});

const ContactForm = () => {
	const classes_Mui = useStyles_ContactForm();
	const formik = useFormik({
		initialValues: {
			email: '',
			message: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
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
				Submit
			</Button>
		</form>
	);
};

export default ContactForm;
