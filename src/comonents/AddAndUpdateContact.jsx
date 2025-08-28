import React from 'react'
import Model from './Model'
import { Field, Form, Formik } from 'formik'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase'

const AddAndUpdateContact = ({ isOpen, onClose }) => {
    const addContact = async (contact) =>{
        try {
            const contactRef = collection(db, 'contact');
            await addDoc(contactRef,contact)

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <Model isOpen={isOpen}
                onClose={onClose}
            >
                <Formik
                initialValues={{
                        name : "",
                        email : ''
                    }}
                onSubmit={(values)=>{
                    console.log(values);
                    addContact(values)
                    console.log(values);
                }}
                >
                    <Form className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor='name'>Name</label>
                            <Field name='name' className='border h-10 ' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor='email'>Email</label>
                            <Field  name='email' className='border h-10 ' />
                        </div>

                        <button className='bg-orange-500 px-3 py-1.5 border self-end'>
                            add Contact
                        </button>
                    </Form>
                </Formik>
            </Model>
        </div>
    )
}

export default AddAndUpdateContact
