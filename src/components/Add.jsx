import { useState } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addEmployeeApi } from '../services/allApi';

function Add() {

    const [show, setShow] = useState(false);
    const [addEmp,setAddEmp] = useState({
        firstname:"",lastname:"",age:"",qualification:"",email:""
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddEmployee = async()=>{
        const {firstname,lastname,age,qualification,email} = addEmp

        if( !firstname || !lastname || !age || !qualification || !email){
            toast.warning("Enter valid data!!")
        }
        else{
          const res = await addEmployeeApi(addEmp)
          console.log(res)

          if(res.status==200){
            toast.success("Employee added successfully!!")
            handleClose()
            setAddEmp({
              firstname:"",lastname:"",age:"",qualification:"",email:""
            })
          }
        }
    }

    return (
        <>
            <div className='container-fluid px-5 pt-5 '>
                <button className='btn btn-warning' onClick={handleShow}><i className="fa-solid fa-user-plus" style={{color: "#fafcff",}} /> Add Project</button>
            </div>

            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" placeholder='Enter Firstname' className='form-control mb-3' onChange={(e)=>{setAddEmp({...addEmp,firstname:e.target.value})}}/>
            <input type="text" placeholder='Enter Lastname' className='form-control mb-3' onChange={(e)=>{setAddEmp({...addEmp,lastname:e.target.value})}}/>
            <input type="text" placeholder='Enter Age' className='form-control mb-3' onChange={(e)=>{setAddEmp({...addEmp,age:e.target.value})}}/>
            <input type="text" placeholder='Enter Qualification' className='form-control mb-3' onChange={(e)=>{setAddEmp({...addEmp,qualification:e.target.value})}}/>
            <input type="text" placeholder='Enter Email' className='form-control mb-3' onChange={(e)=>{setAddEmp({...addEmp,email:e.target.value})}}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddEmployee}>Upload</Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default Add