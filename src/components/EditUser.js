import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";



function EditUser() {

    const { id } = useParams();

    const navigate = useNavigate()

    const initialValues = {
        name: '',
        desination: '',
        city: '',
    }


 


    const onSubmit = async values => {

        await axios.put(`https://61ea3a487bc0550017bc65f8.mockapi.io/user/${id}`, values);
        // console.log("data :-", values)
        navigate('/')
    }


    useEffect(() => {
        const getData = async () => {
          await axios.get(`https://61ea3a487bc0550017bc65f8.mockapi.io/user/${id}`)
        // console.log('data :-', result.data)
        }
        getData();
    },[id])


    const validate = values => {
        let errors = {}
        if (!values.name) {
            errors.name = "Required"
        }
        if (!values.desination) {
            errors.desination = "Required"
        }

        if (!values.city) {
            errors.city = "Required"
        }
        return errors
    }

    return (
        <div className="editUser">
            <Formik
                initialValues={initialValues}
            
                validate={validate}
                onSubmit={onSubmit}
            >
                <Form>
                    <div className="myForm">
                        <label>Name</label>
                        <Field type="text"
                            name="name"
                        />
                        <ErrorMessage name="name" />
                    </div>
                    <div className="myForm">
                        <label>Desination</label>
                        <Field type="text"
                            name="desination"
                        />
                        <ErrorMessage name="desination" />
                    </div>
                    <div className="myForm">
                        <label>City</label>
                        <Field type="text"
                            name="city"
                        />
                        <ErrorMessage name="city" />
                    </div>
                    <Button type="submit" variant='primary'>Submit</Button>
                </Form>
            </Formik>
        </div>
    )
}

export default EditUser