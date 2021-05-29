import axios from 'axios'
import { createSlice, Dispatch } from '@reduxjs/toolkit'

const initialState = {
    token: null
}

interface credential {
    username?: string,
    password?: string
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.token = action.payload.access
        }
    }
})


const { loginSuccess } = authSlice.actions

export const login = ({ username, password }: credential) => async (dispatch: Dispatch) => {
    console.log("haha")
    const res = await axios.post('http://127.0.0.1:8000/api/token/', { username, password })
    console.log(res.data)
    dispatch(loginSuccess(res.data))
}

export default authSlice.reducer
