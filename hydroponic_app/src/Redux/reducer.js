import { FARM_DATA_FAILURE, FARM_DATA_REQUEST, FARM_DATA_SUCCESS } from "./actionTypes"

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FARM_DATA_REQUEST:
            return {
                data: payload,
                isLoading: true,
                isError: false
            }

        case FARM_DATA_SUCCESS:
            return {
                data: payload,
                isLoading: false,
                isError: false
            }

        case FARM_DATA_FAILURE:
            return {
                isLoading: false,
                isError: true
            }

        default:
            return state
    }
}