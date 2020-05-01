/**
 * @description create default function for mapDispatchToProps
 * @param {Function} dispatch
 * @param {Function} actionCreator
 * @param {Any} payload
 */
export const functionForDispatch = (dispatch, actionCreator) => {
    return payload => {
        const action = actionCreator(payload);

        dispatch(action);
    };
};
