import { MINIMISE_TABLE } from "../actionTypes/actionTypes";

const initialState = {
	isMinimised: false,
};

const cartReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case MINIMISE_TABLE:
			return {
				...state,
				isMinimised: !state.isMinimised,
			};
		default:
			return state;
	}
};
export default cartReducer;
