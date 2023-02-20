import axios from "axios";
import {baseURL,ACCESS_TOKEN} from "../configs/urls";

const axiosInstance=axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    }
})
export {
    axiosInstance
}