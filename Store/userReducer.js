
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userList: []
  },
  reducers: {
    updateUser(state, action) {
        state.userList.push(action.payload);
    }
  }
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
