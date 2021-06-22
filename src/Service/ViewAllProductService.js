import axios from "axios"

export const viewAllProductService = () =>{
        return axios.get(`http://localhost:8086/GroceryApp/admin/product/view-all`)
        .then((res) => 
             res.data
        )
        .catch((err) => {
            throw new Error(err.message)
        })
    
    }