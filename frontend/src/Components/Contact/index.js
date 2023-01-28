import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.scss'

const Contact = () => {
    return (
<>
<div className='contact'>
    <div className='contact-head'>
        CONTACT US
    </div>
    <div className='contacts'>
        <div className='location'>
        <i className='contact-icons' class="fa-solid fa-location-dot"></i>
        <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
        </div>
        <div className='phone'>
        <i className='contact-icons' class="fa-solid fa-phone"></i>
        <p>+1 232 3235 324</p>
        </div>
        <div className='mail'>
        <i className='contact-icons' class="fa-regular fa-envelope"></i>
        <p>youremail@domain.com</p>
        </div>
    </div>
</div>

        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', subject: '', message: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less'),
                email: Yup.string().email('Invalid email address'),
                Subject: Yup.string(),
                Message: Yup.string()
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form className='forms'>
                <div className='names'>
                    <div className='firstname'>
                        <label  htmlFor="firstName">First Name</label>
                        <Field className='int' name="firstName" type="text" />
                    </div>
                    <div className='lastname'>
                        <label htmlFor="lastName">Last Name</label>
                        <Field className='int' name="lastName" type="text" />
                    </div>
                </div>
                <div className='email'>
                    <label htmlFor="email">Email Address</label>
                    <Field className='int' name="email" type="email" />
                    <ErrorMessage name="email" />
                </div>
                <div className='email'>
                    <label htmlFor="subject">Subject</label>
                    <Field className='int' name="lastName" type="text" />
                </div>
                <div className='message'> 
                    <label  htmlFor="message">Message</label>
                    <Field className='message-int' name="lastName" type="text" />
                </div>
                <button className='send-btn' type="submit">Send Message</button>
            </Form>
        </Formik>
        </>
    );
};

export default Contact;