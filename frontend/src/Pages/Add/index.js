import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import './style.scss'

const Add = () => {

    return (
        <>
  
                 <div className='add'>
                <Formik
                    initialValues={{ icon: '', title: '', description: '' }}

                    onSubmit={(values) => {
                        axios.post("http://localhost:8888/", values)
                    }}
                >
                    <Form className='add-form'>
                        <label htmlFor="icon">icon</label>
                        <Field className='add-int' name="icon" type="text" />

                        <label htmlFor="title">title</label>
                        <Field className='add-int' name="title" type="text" />

                        <label htmlFor="description">description</label>
                        <Field className='add-int' name="description" type="text" />

                        <button className='add-btn' type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    );
};

export default Add;