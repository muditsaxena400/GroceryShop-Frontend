import axios from "axios"

export const bookProduct = (order) =>{
    
        return axios.post(`http://localhost:8086/GroceryApp/customer/book-product`, order)
        .then((res) => {

            return res.data
        })
        .catch((err) => {
            throw new Error(err.response.data.message)
        })
    }