import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  contacts: [],
};
export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(contact => contact.id === action.payload);
      state.contacts.splice(index, 1);
    },
  },
});
export const { addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
