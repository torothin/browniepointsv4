import { GoalsActionTypes } from './goals.types';
import { newGoal, checkGoal } from './goals.utils';

import { precreatedGoals, precreatedCompletedGoals } from '../../test-scripts/goals-test';

const INITIAL_STATE = {

    nextGoalID: 13,

    // goalList: {
    //     todos: [],
    //     daily: [],
    //     weekly: [],
    //     monthly: [],
    // },

    // completedGoalList: {
    //     todos: [],
    //     daily: [],
    //     weekly: [],
    //     monthly: [],
    // }

    // set for testing
    goalList: precreatedGoals,
    completedGoalList: precreatedCompletedGoals,

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
                goalList: newGoal(state.goalList, state.nextGoalID, action.payload),
                nextGoalID: state.nextGoalID + 1,
            };
        case GoalsActionTypes.CHECK_GOAL:
            return {
                ...state,
                goalList: checkGoal(state.goalList, action.payload),
                
            };
        default:
            return state;
    }
};

export default goalsReducer;