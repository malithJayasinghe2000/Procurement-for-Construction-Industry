import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',  // The name of the slice
  initialState: {
    user: null,  // Initial state with a user property set to null
  },
  reducers: {
    setUser: (state, action) => {
      // Reducer to set the user state with an action payload
      state.user = action.payload;
    },
  },
});

// Export action creators generated by createSlice
export const { setUser, reloadUserData } = userSlice.actions;