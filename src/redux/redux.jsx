import { createStore } from "redux";

const value = {
    cash: 0,
};

function storeReducer(state = value, action) {
    if (action.type === "add") {
        return {
            ...state,
            cash: state.cash + action.payload,
        };
    }
    if (action.type === "get") {
        return {
            ...state,
            cash: state.cash - action.payload,
        };
    }
    return state;
}

// const store = createStore(reducer);

// export default store;

export default storeReducer;
