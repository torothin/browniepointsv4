import { GoalsActionTypes } from './goals.types';
import { newGoal } from './goals.utils';

const INITIAL_STATE = {

    goalList: {
        todos: {},
        daily: {},
        weekly: {},
        monthly: {},
    }
};

const goalsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GoalsActionTypes.ADD_GOAL:
            return {
                ...state,
                
            };
        case GoalsActionTypes.REMOVE_GOAL:
                return {
                    ...state,
                    
                };
        case GoalsActionTypes.NEW_GOAL:
                return {
                    ...state,
                    goalList: newGoal(state.goalList, action.payload),
                    
                };
        default:
            return state;
    }
};

export default goalsReducer;