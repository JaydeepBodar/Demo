import { createSlice } from "@reduxjs/toolkit";

const data = {
  error: null,
  item: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const Productslice = createSlice({
  name: "demo",
  initialState: data,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      console.log("newItemnewItem",state.item)
      const existingItem = state.item.find((pro) => pro.id === newItem._id);
      if (!existingItem) {
        state.item.push({
          id: newItem._id,
          title: newItem.Productname,
          price: newItem.Productprice,
          quantity: 1,
          image: newItem.Productimage,
        });
        state.totalPrice += newItem.Productprice;
      } else {
        existingItem.quantity++;
        state.totalPrice += newItem.Productprice;
      }

      state.totalQuantity++;
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.item.find((pro) => pro.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.item = state.item.filter((pro) => pro.id !== id);
        } else {
          existingItem.quantity--;
        }
        state.totalPrice -= existingItem.price;
        state.totalQuantity--;
      }
    },
  },
});

export const { addItem, removeItem } = Productslice.actions;
export default Productslice.reducer;
