import axios from 'axios';
import * as yup from 'yup';

export const validationSchema = yup.object({
	email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
	message: yup.string('Enter your Message').min(8, 'Message should be of minimum 8 characters length').required('Message is required'),
});

const formatEmail = (values) => ({
	from: values.email,
	to: process.env.EMAIL,
	replyTo: values.email,
	subject: 'Portfolio - Contact Form',
	text: values.message,
});

export const submitFormHandler = async (values, resetForm, setIsLoading, setEmailResponse) => {
	setIsLoading(true);
	const emailData = formatEmail(values);
	try {
		const { status } = await axios.post('https://personal-portfolio-maciej.herokuapp.com/emails', emailData);
		status === 200 && setEmailResponse({ success: true, text: 'Email has been sent. I will reply as soon as possible.' });

		setIsLoading(false);
		resetForm({});
	} catch (error) {
		setEmailResponse({ success: false, text: 'Oops something went wrong. Please try again' });
		setIsLoading(false);
	}
};
