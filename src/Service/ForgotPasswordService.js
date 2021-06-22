import axios from "axios"

export const forgotPassword = (loginId, answer, newPassword) =>{
        return axios.put(`http://localhost:8086/GroceryApp/grocery/forgot-password/${loginId}/${answer}/${newPassword}`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw new Error(err.response.data.message)
        })
    }

