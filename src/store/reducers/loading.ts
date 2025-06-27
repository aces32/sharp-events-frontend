import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoadingState {
  isLoading: boolean;
}
const initialState: LoadingState = {
  isLoading: false,
};

const LoadingSlice = createSlice({
  name: 'LoadingSlice',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<LoadingState>) => {
      const newState = Object.assign(state, action.payload);
      return newState;
    },
  },
});
export const LoadingActions = LoadingSlice.actions;
export default LoadingSlice.reducer;
