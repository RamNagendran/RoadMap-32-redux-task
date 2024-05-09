import {configureStore} from '@reduxjs/toolkit'
import { cartItemsSlice } from './reducer'


export const store = configureStore({
    reducer: {
        cartItems: cartItemsSlice.reducer
    }
})