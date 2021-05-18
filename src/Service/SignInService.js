//import { Component } from "react"
//import React from 'react'
import axios from "axios"
import BACKEND_URL from "../MainUrl"

export const signin = (email,password) =>{
        return axios.get(`${BACKEND_URL}/grocery/login/${email}/${password}`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw new Error(err.response.data.message)
        })
    }

