import {useSelector } from "react-redux";

export const useCart = () => {
    const {cartItems, cartItemCount} = useSelector((state) => state.cartItems);
    return {
        cartItems,
        cartItemCount
    }
}