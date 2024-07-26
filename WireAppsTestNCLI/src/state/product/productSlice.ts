import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import ApiService from '../../services/apiService';
import {fireToast} from '../toast/toastSlice';
import {Product} from '../../../my-app';

const apiService = new ApiService();

interface ProductState {
  result: string;
  data: Product[];
  loading: boolean;
}

const initialState: ProductState = {
  result: '',
  data: [],
  loading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clear: state => {
      state.result = '';
      state.data = [];
      state.loading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserInfo.pending, state => {
        state.data = [];
        state.loading = true;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.result = action.payload.result;
        state.data = action.payload.data;
        state.loading = false;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.data = [];
        state.loading = false;
      });
  },
});

export const fetchUserInfo = createAsyncThunk(
  'product/fetchProductList',
  async (_state, {dispatch}) => {
    try {
      const products = await apiService.get('/generator/userinfo');
      if (products) {
        return products as ProductState;
      } else {
        fireToast(
          {
            title: 'Error',
            message: 'There is an error with fetching product, Please try again.',
            type: 'error',
          },
          dispatch,
        );
        throw new Error('No business categories found');
      }
    } catch (error) {
      fireToast(
        {
          title: 'Error',
          message: 'There is an error with fetching product, Please try again.',
          type: 'error',
        },
        dispatch,
      );
      throw new Error('No business categories found');
    }
  },
);

export const {clear} = productSlice.actions;
export default productSlice.reducer;
