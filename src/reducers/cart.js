
export const CarInitialState =   JSON.parse(window.localStorage.getItem("cart")) || [];
;

export const updateLocalStorage = (state) => {
    window.localStorage.setItem("cart", JSON.stringify(state));
}

export const CarReducer = (state, action) => {
    const {type: actionType, payload: actionPayload} = action


    switch(actionType) {
        case "ADD_TO_CART": {
            const {id} = actionPayload;
            const productInCartIndex = state.findIndex((item) => item.id === id)
            

            if(productInCartIndex >= 0){
                const newState = structuredClone(state);
                newState[productInCartIndex].quantity += 1;
                updateLocalStorage(newState)

                return newState;
            }

            const newState = [...state, {...actionPayload, quantity: 1}];
            updateLocalStorage(newState);


            return newState;
        }
        case "REMOVE_ONE": {
            const {id} = actionPayload;
            const productInCartIndex = state.findIndex((item) => item.id === id)


            if(productInCartIndex >= 0){
                const newState = structuredClone(state);
                newState[productInCartIndex].quantity -= 1;
                updateLocalStorage(newState)

                return newState
            }
            
             const newState = [...state, {...actionPayload, quantity: 0}];
            updateLocalStorage(newState);
          
        }

    }
}