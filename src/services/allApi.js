import axios from "axios";

const baseUrl = 'https://employeemngserver.onrender.com'

export const addEmployeeApi = async(data) =>{
    return await axios.post(`${baseUrl}/addemp`,data)
}

export const getEmployeeApi = async()=>{
    return await axios.get(`${baseUrl}/employee`)
}

export const UpdateEmployeeApi = async(data,id)=>{
    return await axios.put(`${baseUrl}/updateemp/${id}`,data)
}

export const deleteEmployeeApi = async(id)=>{
    return await axios.delete(`${baseUrl}/dltemp/${id}`)
}