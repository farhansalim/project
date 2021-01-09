import {SEARCH_SUCCESS, SEARCH_FAILURE} from './../../actions/ActionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case SEARCH_SUCCESS:
            return Object.assign({}, state, {
                data: action.payload.data,
                operators: action.payload.operators,
                plans: action.payload.plans
            });
        case SEARCH_FAILURE:
            return Object.assign({}, state, { 
                error: action.payload })

      

    }

    return state;
}
