import { GoalsActionTypes } from './goals.types';
import { addGoal, checkGoal, completeGoalsTest, completeGoals, resetEarnedPoints } from './goals.utils';

import { precreatedGoals, precreatedCompletedGoals } from '../../test-scripts/goals-test';

const INITIAL_STATE = {

    nextGoalID: 13,
    goalPointTotal: 0, //total points of all the goals to get an average
    lastUpdate: null,
    
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
    goalEarnedPoints: 0,

};

const goalsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GoalsActionTypes.REMOVE_GOAL:
            return {
                ...state,
            };
        case GoalsActionTypes.ADD_GOAL:
            return {
                ...state,
                goalList: addGoal(state.goalList, state.nextGoalID, action.payload),
                nextGoalID: state.nextGoalID + 1,
            };
        case GoalsActionTypes.CHECK_GOAL:
            return {
                ...state,
                goalList: checkGoal(state.goalList, action.payload),
            };
        case GoalsActionTypes.RESET_EARNED_POINTS:
            return {
                ...state,
                goalEarnedPoints: resetEarnedPoints(),
            };
        case GoalsActionTypes.COMPLETE_GOALS_TEST:
            return completeGoalsTest(state);
        case GoalsActionTypes.COMPLETE_GOALS:
            return completeGoals(state);
        default:
            return state;
    }
};

export default goalsReducer;