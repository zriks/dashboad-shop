import { productConstant } from "../constants";

const initState = {};

export function product(state = initState, action) {
    switch (action.type) {
        case productConstant.GETALL_SUCCESS:
            return {
                product: action.payload
            };
        default:
            return state;
    }
}
