import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    gamesInCart: []
  },
  reducers: {
    setGameInCart: (state, action) => {
      state.gamesInCart.push(action.payload)
    },
    deleteGameFromCart: (state, action) => {
    state.gamesInCart = state.gamesInCart.filter(game => game.id !== action.payload)
    }
  }
})

export const {setGameInCart, deleteGameFromCart} = cartSlice.actions
export default cartSlice.reducer