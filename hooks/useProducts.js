import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/slices/productSlice';

export const useProducts = () => {
  const dispatch = useDispatch();

  const { items: products, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return {
    products,
    loading,
    error,
  };
};