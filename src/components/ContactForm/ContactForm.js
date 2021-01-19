import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import TextArea from './TextArea';

const ContactForm = () => {
	const initialValues = {
		name: '',
		email: '',
		password: '',
	};

	const validationSchema = Yup.object({
		name: Yup.string().required('Required'),
		email: Yup.string().email('Invalid email format').required('Required'),
		password: Yup.string().required('Required'),
	});

	const onSubmit = (values) => {
		console.log('Form data', values);
	};

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			{(formik) => {
				return (
					<Form>
						<Input control="input" type="email" label="Name" name="name" />
						<Input control="input" type="email" label="Email" name="email" />
						<TextArea control="input" type="password" label="Message" name="message" />
						<button type="submit" disabled={!formik.isValid}>
							Submit
						</button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default ContactForm;
