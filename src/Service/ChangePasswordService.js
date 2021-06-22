import axios from "axios"

export const changePassword = (loginId, oldPassword, newPassword) =>{
        return axios.put(`http://localhost:8086/GroceryApp/grocery/change-password/${loginId}/${oldPassword}/${newPassword}`)
        .then((res) => {
            alert(res.data)
            return res.data
        })
        .catch((err) => {
             throw new Error(err.response.data.message)
        })
    }
