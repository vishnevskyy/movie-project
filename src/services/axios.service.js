import axios from "axios";
import {baseURL} from "../configs/urls";
import {token} from '../configs/token/token'

const axiosService=axios.create({baseURL,headers:{Authorization:`Bearer ${token}`}})
export {
    axiosService
}