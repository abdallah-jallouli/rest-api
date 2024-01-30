import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { ADD_USERS } from '../redux/actionTypes';
import { addusers } from '../redux/actions';


Modal.setAppElement('#root');


const AddUser = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newuser = {fullname , email , phone};
        dispatch(addusers(newuser))
    }
    

    function openModal() {
        setIsOpen(true);
      }
      
    function closeModal() {
        setIsOpen(false);
      }
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <form onSubmit={handleSubmit}>
        <label >Full Name : </label>
        <input type='text' placeholder='hassen' value={fullname}  onChange={e=>setFullname(e.target.value)} />
        <label >Email : </label>
        <input type='text' placeholder='hassen@gmail.com' value={email} onChange={e=>setEmail(e.target.value)}/>
        <label >Phone : </label>
        <input type='text' placeholder='+216 55 888 777' value={phone} onChange={e=>setPhone(e.target.value)} />

        <button type='submit'> confirm </button>
        </form>
      </Modal>
    </div>
  )
}

export default AddUser