import axios from "axios"
export const addProduct = (product) =>{
    console.log(product)
        return axios.post(`http://localhost:8086/GroceryApp/admin/product/add`, product)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw new Error(err.response.data.message)
        })
    }