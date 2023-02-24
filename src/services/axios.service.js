import axios from "axios";
import {baseURL} from "../configs/urls";
import {token} from '../configs/token/token'
import {createBrowserHistory} from "history";

const history=createBrowserHistory();
const axiosService=axios.create({baseURL,headers:{Authorization:`Bearer ${token}`}})
export {
    history,
    axiosService
}