import { deleteDoc, doc } from 'firebase/firestore'
import React, { useState } from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from '../config/firebase'
import AddAndUpdateContact from './AddAndUpdateContact'

const ContactCard = ({cont}) => {



    const deleteContact = async (id) =>{
        try {
            await deleteDoc(doc(db,'contact',id))
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div key={cont.id} className='bg-yellow-200 flex justify-between items-center p-2 rounded-lg'>
            <div className='flex gap-2'>
                <HiOutlineUserCircle className='text-orange-500 text-5xl' />

                <div className=''>
                    <h2 className='font-bold'>{cont.name}</h2>
                    <p className='text-sm'>{cont.email}</p>
                </div>
            </div>
            <div className='flex text-3xl'>
                <IoMdTrash onClick={()=>deleteContact(cont.id)} className='text-orange-500 cursor-pointer' />

            </div>
        </div>
    )
}

export default ContactCard
