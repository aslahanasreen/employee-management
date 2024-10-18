import React from 'react'
import Add from '../components/Add'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { getEmployeeApi,UpdateEmployeeApi,deleteEmployeeApi } from '../services/allApi';
import { toast } from 'react-toastify';
import './home.css'

function Home() {

    const [show, setShow] = useState(false);
    const [editEmp, setEditEmp] = useState({
        id: "", firstname: "", lastname: "", age: "", qualification: "", email: ""
    })
    const [employee, setemployee] = useState([])

    useEffect(() => {
        getData()
    }, [employee])

    const getData = async () => {
        const res = await getEmployeeApi()
        // console.log(res)
        if (res.status == 200) {
            setemployee(res.data)
        }
    }

    const handleUpdate = async()=>{
        const res = await UpdateEmployeeApi(editEmp,editEmp.id)
        console.log(res)

        if(res.status == 200){
            toast.success("Updation successful!!")
            handleClose()
            setEditEmp({
                id: "", firstname: "", lastname: "", age: "", qualification: "", email: ""
            })
            getData()
        }
        else{
            toast.error("updation failed!!")
        }
    }

    const handleDelete = async(id)=>{
        const res = await deleteEmployeeApi(id)
        console.log(res)

        if(res.status == 200){
            toast.success("Deletion successful!!")
        }
        else{
            toast.error("Deletion failed!!")
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        setShow(true)
        setEditEmp({
             id: data._id, firstname: data.firstname, lastname: data.lastname, age: data.age, qualification: data.qualification, email: data.email
        })
    };

    return (
        <>
            <Add />

            <div className='container-fluid p-5 row'>
                {
                    employee?.length > 0 ?
                        <>
                            {
                                employee?.map(item => (
                                    // <div className=''>
                                        <Card style={{ width: '18rem' }} className='col-md-4 col-sm-3 me-4 mb-4 border shadow cll'>
                                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                            <Card.Body>
                                                <Card.Title className='text-center'>{item.firstname}{' '}{item.lastname}</Card.Title>
                                                <Card.Text className='text-center'>
                                                    Age:{item.age} <br />
                                                    Qualification: {item.qualification} <br />
                                                    Email: {item.email}
                                                </Card.Text>
                                                <div className='d-grid mb-1'>
                                                    <Button className='btn btn-primary' onClick={()=>{handleShow(item)}}>Edit</Button>
                                                </div>
                                                <div className='d-grid mb-3'>
                                                    <Button className='btn btn-primary'onClick={()=>{handleDelete(item._id)}}>Delete</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    // </div>
                                ))
                            }
                        </>
                        :
                        <h3>No employees added yet!!</h3>
                }
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" value={editEmp.firstname} onChange={(e) => { setEditEmp({ ...editEmp, firstname: e.target.value }) }} className='form-control mb-3' />
                    <input type="text" value={editEmp.lastname} onChange={(e) => { setEditEmp({ ...editEmp, lastname: e.target.value }) }} className='form-control mb-3' />
                    <input type="text" value={editEmp.age} onChange={(e) => { setEditEmp({ ...editEmp, age: e.target.value }) }} className='form-control b-3' />
                    <input type="text" value={editEmp.qualification} onChange={(e) => { setEditEmp({ ...editEmp, qualification: e.target.value }) }} className='form-control mb-3' />
                    <input type="text" value={editEmp.email} onChange={(e) => { setEditEmp({ ...editEmp, email: e.target.value }) }} className='form-control mb-3' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Home