import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';

const initialState = {
    ACCESS_TOKEN: '',
    REFRESH_TOKEN: ''
};

const cookies = new Cookies();

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials(state, action) {
            const { ACCESS_TOKEN, REFRESH_TOKEN } = action.payload;
            state.ACCESS_TOKEN = ACCESS_TOKEN;
            state.REFRESH_TOKEN = REFRESH_TOKEN;
        },
        async logOut(state) {
            await localStorage.removeItem('@govtech/user');
            await cookies.remove('ACCESS_TOKEN');
            await cookies.remove('REFRESH_TOKEN');
            state.ACCESS_TOKEN = null;
            state.REFRESH_TOKEN = null;
        },
    },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
