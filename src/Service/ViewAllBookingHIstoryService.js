import axios from "axios"

export const viewAllBookingHistory = () =>{
        return axios.get(`http://localhost:8086/GroceryApp/admin/customer/all-booking-history`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw new Error(err.response.data.message)
        })
    }

