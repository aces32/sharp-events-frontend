import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  companyEmail: string;
  companyName: string;
  eventUserId: string;
  userFirstName: string;
  userLastName: string;
  serviceId: string;
  serviceName: string;
}
const initialState: IUser = {
  companyEmail: '',
  companyName: '',
  eventUserId: '',
  userFirstName: '',
  userLastName: '',
  serviceId: '',
  serviceName: '',
};
const UserSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserData: (_state, action: PayloadAction<IUser>) => ({ ...action.payload }),

    clearUserData: () => initialState,
  },
});

export const UserSliceAction = UserSlice.actions;

export default UserSlice.reducer;
