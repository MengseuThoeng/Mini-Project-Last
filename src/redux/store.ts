import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import cartSlice from './features/cart/cartSlice'
import { ecommerceApi } from './api'
import authSlice from './features/auth/authSlice'
import userProfileSlice from './features/userProfile/userProfileSlice'

// create store
export const makeStore = () => {
    return configureStore({
        reducer: {
            // Add the generated reducer as a specific top-level slice
            [ecommerceApi.reducerPath]: ecommerceApi.reducer,
            counter: counterSlice,
            cart: cartSlice,
            auth: authSlice,
            userProfile: userProfileSlice,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ecommerceApi.middleware),
    });
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']