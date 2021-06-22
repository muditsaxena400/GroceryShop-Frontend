import axios from "axios"

export const deleteProduct = (pId) =>{
        axios.delete(`http://localhost:8086/GroceryApp/admin/product/delete/${pId}`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw new Error(err.response.data.message)
        })
    }
