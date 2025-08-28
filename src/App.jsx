import React, { useEffect, useState } from 'react'
import Navbar from './comonents/Navbar'
import { CiSearch } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaPlusCircle } from "react-icons/fa";
import { collection, getDocs } from 'firebase/firestore'
import { db } from './config/firebase';
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import ContactCard from './comonents/ContactCard';
import Model from './comonents/Model';
import AddAndUpdateContact from './comonents/AddAndUpdateContact';


const App = () => {
  const [contact, setContact] = useState([]);
  const [isOpen,setOpen] = useState(false);

  const onOpen = () =>{
    setOpen(true)
  }
    const onClose = () =>{
    setOpen(false)
  }



  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contact")
        const contactSnapshot = await getDocs(contactRef)
        const contactList = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })

        setContact(contactList)

      } catch (error) {
        console.log(error);

      }
    }
    getContacts();
  }, [])


  return (
    <>
    <div className='max-w-[370px] mx-auto px-4'>
      <Navbar />

      <div className='flex gap-2'>
        <div className='flex relative items-center flex-grow'>
          <CiSearch className='text-white text-3xl absolute ml-1' />
          <input type="text" className='bg-transparent border border-white rounded-md h-10 flex-grow text-white pl-9' />
        </div>
        <FaPlusCircle onClick={onOpen} className='text-5xl text-white cursor-pointer' />
      </div>

      <div className='mt-4 flex flex-col gap-3'>
        {
          contact.map((cont) => (
            <ContactCard key={cont.id} cont={cont} />
          ))
        }
      </div>
    </div>
    <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
        </>
  )
}

export default App
