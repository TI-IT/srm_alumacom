import axios from 'axios'
import { createAsyncThunk, createSlice, isFulfilled } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('products/fetchProductsStatus', async params => {
  const { order, sortBy, category, search, currentPage } = params
  const { data } = await axios.get(
    `https://63427733ba4478d4783c44ef.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
  )
  return data
})

const initialState = {
  items: [],
  status: 'loading' // loading | success | error
}

const pizzaSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    }
  },
  extraReducers: {
    [fetchProducts.pending]: state => {
      state.status = 'loading'
      state.items = []
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'error'
      state.items = []
    }
  }
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer