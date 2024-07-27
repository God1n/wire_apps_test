import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import ApiService from '../../services/apiService';
import {fireToast} from '../toast/toastSlice';
import {iProductResponse, Product} from '../../../my-app';

const apiService = new ApiService();

interface ProductState {
  result: string;
  products: Product[];
  loading: boolean;
}

const initialState: ProductState = {
  result: '',
  products: [],
  loading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clear: state => {
      state.result = '';
      state.products = [];
      state.loading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProductList.pending, state => {
        state.products = [];
        state.loading = true;
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.result = action.payload.result;
        state.products = action.payload.data;
        state.loading = false;
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.products = [];
        state.loading = false;
      });
  },
});

export const fetchProductList = createAsyncThunk(
  'product/fetchProductList',
  async (_state, {dispatch}) => {
    try {
      const products = await apiService.get(
        '/api.themeshplatform.com/products.json',
      );
      if (products) {
        return products as iProductResponse;
      } else {
        fireToast(
          {
            title: 'Error',
            message:
              'There is an error with fetching product, Please try again.',
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
