import axios from "axios"

export const signin = (email,password) =>{
        return axios.get(`http://localhost:8086/GroceryApp/grocery/login/${email}/${password}`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw new Error(err.response.data.message)
        })
    }

