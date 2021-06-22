import axios from "axios"

export const updateProduct = (product) =>{
        return axios.put(`http://localhost:8086/GroceryApp/admin/product/update`, product)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw new Error(err.response.data.message)
        })
    }
