import axios from "axios"

export const addUser = (user) =>{
    console.log(user)
        return axios.post(`http://localhost:8086/GroceryApp/grocery/register`, user)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw new Error(err.response.data.message)
        })
    }