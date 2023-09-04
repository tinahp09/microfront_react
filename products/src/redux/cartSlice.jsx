import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, actions) => {
      state.cart.push(actions.payload)
      console.log('state cart', state.cart)
      console.log('action payload', actions.payload)
    },
  },
})

export default cartSlice.reducer
export const { addToCart } = cartSlice.actions
