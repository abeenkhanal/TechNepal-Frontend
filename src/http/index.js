import axios from "axios";

const API = axios.create({
    baseURL : "https://technepal-backend-production.up.railway.app/api",
    // baseURL : "http://localhost:3000/api",
    headers : {
        'Content-Type' : 'application/json',
        Accept : 'application/json'
    }
})

const token = localStorage.getItem('token')
const APIAuthenticated = axios.create({
    
    baseURL : "https://technepal-backend-production.up.railway.app/api",

    // baseURL : "http://localhost:3000/api",
    headers : {
        'Content-Type' : 'application/json',
        Accept : 'application/json',
        'Authorization' : `${token}`
        //'Authorization' : `${localStorage.getItem('token')}`
    }
})

export {API,APIAuthenticated}