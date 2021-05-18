import axios from "axios"
import BACKEND_URL from "../MainUrl"

export const addProduct = (product) =>{
        return axios.post(`https://cors-anywhere.herokuapp.com/${BACKEND_URL}/admin/product/add}`, product, {
           /* headers: {
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }*/
        })
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw new Error(err.response.data.message)
        })
    }