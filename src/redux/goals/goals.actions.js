import { GoalsActionTypes } from './goals.types';
import { store } from '../store';

export const addGoal = goal => ({
    type: GoalsActionTypes.ADD_GOAL,
    payload: goal
});

export const removeGoal = goal => ({
    type: GoalsActionTypes.REMOVE_GOAL,
    payload: goal
});

export const checkGoal = goal => ({
    type: GoalsActionTypes.CHECK_GOAL,
    payload: goal
});

export const completeGoalsTest = () => ({
    type: GoalsActionTypes.COMPLETE_GOALS_TEST
});

export const completeGoals = () => ({
    type: GoalsActionTypes.COMPLETE_GOALS
});

export const resetEarnedPoints = () => ({
    type: GoalsActionTypes.RESET_EARNED_POINTS
});

// export const thunk_completeGoalsTest = () => {
//     { type: GoalsActionTypes.COMPLETE_GOALS_TEST }
//     return (dispatch) => {
//         dispatch(store.goals.);
//         const points = store.goals.goalEarnedPoints;
//         store.dispatch(store.updateEarnedPoints(points));
//     }
// }