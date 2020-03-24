import { productConstant } from "../constants";

const fetchProduct = () => ({
    type: productConstant.GETALL_REQUEST
});

const fetchProductSuccess = products => ({
    type: productConstant.GETALL_SUCCESS,
    payload: products
});

const fetchProductFailure = error => ({
    type: productConstant.GETALL_FAILURE,
    payload: error
});

export const productAction = {
    fetchProduct,
    fetchProductSuccess,
    fetchProductFailure
};
