import axios from 'axios'

export const GET_CUSTOMERS = 'GET_CUSTOMERS'
export const GET_SELLERS = 'GET_SELLERS'

const request = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_SERVER,
})

export const getCustomers = async () => {
    const response = await request.get('/customers')
    const customersList = response.data

    return (dispatch) => {
        dispatch({
            type: GET_CUSTOMERS,
            payload: customersList,
        })
    }
}

export const getSellers = () => {
    const sellersList = []

    return (dispatch) => {
        dispatch({
            type: GET_SELLERS,
            payload: sellersList,
        })
    }
}

